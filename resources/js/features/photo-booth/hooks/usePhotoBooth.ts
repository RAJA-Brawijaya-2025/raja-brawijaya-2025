import { useState, useRef, useEffect, useCallback } from 'react';

export const usePhotoBooth = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [remainingShots, setRemainingShots] = useState<number>(0);
  const [timerDuration, setTimerDuration] = useState<number>(5);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isRetakingPhoto, setIsRetakingPhoto] = useState<boolean>(false);
  const [retakePhotoIndex, setRetakePhotoIndex] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const isMobile = () =>
    /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
    window.innerWidth <= 768;

  const startCamera = useCallback(async () => {
    setIsLoading(true);
    setCameraError(null);

    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const constraints = {
        video: {
          facingMode: isMobile() ? 'user' : 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      };

      const mediaStream =
        await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = mediaStream;
      setStream(mediaStream);
      setCameraError(null);
    } catch (error: any) {
      console.error('Camera error:', error);
      const errMsg =
        error.name === 'NotAllowedError'
          ? 'Akses kamera ditolak'
          : error.name === 'NotFoundError'
            ? 'Kamera tidak ditemukan'
            : error.name === 'NotReadableError'
              ? 'Kamera sedang digunakan aplikasi lain'
              : 'Tidak bisa mengakses kamera';
      setCameraError(errMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setStream(null);
    }
  }, []);

  const retryCamera = useCallback(async () => {
    await startCamera();
  }, [startCamera]);

  const takePicture = useCallback(
    (targetIndex?: number) => {
      if (!videoRef.current || !canvasRef.current || !stream) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (
        video.readyState < 2 ||
        video.videoWidth === 0 ||
        video.videoHeight === 0
      ) {
        console.warn('Video not ready');
        return;
      }

      requestAnimationFrame(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);

        if (isMobile()) {
          ctx.scale(-1, 1);
          ctx.drawImage(video, -width, 0, width, height);
        } else {
          ctx.drawImage(video, 0, 0, width, height);
        }

        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        if (dataUrl.length < 5000) {
          console.warn('Invalid image');
          return;
        }

        if (typeof targetIndex === 'number') {
          setCapturedImages((prev) => {
            const updated = [...prev];
            while (updated.length < 3) updated.push('');
            updated[targetIndex] = dataUrl;
            return updated;
          });
        } else {
          setCapturedImages((prev) => [...prev, dataUrl]);
        }
      });
    },
    [stream],
  );

  const startCaptureSession = useCallback(() => {
    if (!stream || isCapturing || isRetakingPhoto) return;
    setCapturedImages([]);
    setIsCapturing(true);
    setRemainingShots(3);
    setCountdown(timerDuration);
  }, [stream, isCapturing, isRetakingPhoto, timerDuration]);

  const repeatSession = () => {
    setCapturedImages([]);
    setIsCapturing(false);
    setIsRetakingPhoto(false);
    setRetakePhotoIndex(null);
    setCountdown(null);
    setRemainingShots(0);
  };

  const retakePhoto = (index: number) => {
    if (!stream || isCapturing || isRetakingPhoto) return;
    setIsRetakingPhoto(true);
    setRetakePhotoIndex(index);
    setCountdown(timerDuration);
  };

  const downloadAllPhotos = () => {
    if (capturedImages.length === 0) return;
    const timestamp = Date.now();
    capturedImages.forEach((img, idx) => {
      if (img) {
        const link = document.createElement('a');
        link.href = img;
        link.download = `photo-${timestamp}-${idx + 1}.jpg`;
        link.click();
      }
    });
  };

  const clearPhotos = () => {
    setCapturedImages([]);
    setIsRetakingPhoto(false);
    setRetakePhotoIndex(null);
  };

  const handleTimerDurationChange = (duration: number) =>
    setTimerDuration(duration);

  // Auto-assign stream to video
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !stream) return;

    if (video.srcObject !== stream) {
      console.log('Binding stream to video');
      video.srcObject = stream;
    }

    const handleLoaded = () => {
      console.log('Video loaded');
      setCameraError(null);
    };

    const handleError = (e: any) => {
      console.error('Video playback error', e);
      setCameraError('Video error');
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, [stream]);

  useEffect(() => {
    if (!isCapturing && !isRetakingPhoto) return;

    let timer: NodeJS.Timeout;

    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => (prev ?? 0) - 1), 1000);
    } else if (countdown === 0) {
      timer = setTimeout(() => {
        if (isRetakingPhoto && retakePhotoIndex !== null) {
          takePicture(retakePhotoIndex);
          setTimeout(() => {
            setIsRetakingPhoto(false);
            setRetakePhotoIndex(null);
            setCountdown(null);
          }, 200);
        } else if (isCapturing && remainingShots > 0) {
          takePicture();
          const next = remainingShots - 1;
          setRemainingShots(next);
          if (next > 0) {
            setCountdown(timerDuration);
          } else {
            setIsCapturing(false);
            setCountdown(null);
          }
        }
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [
    countdown,
    isCapturing,
    isRetakingPhoto,
    remainingShots,
    takePicture,
    retakePhotoIndex,
    timerDuration,
  ]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        streamRef.current?.getTracks().forEach((t) => (t.enabled = false));
      } else {
        streamRef.current?.getTracks().forEach((t) => (t.enabled = true));
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  useEffect(() => {
    startCamera();
    return stopCamera;
  }, []);

  const isSessionComplete =
    capturedImages.length === 3 &&
    !isCapturing &&
    !isRetakingPhoto &&
    capturedImages.every((img) => img && img.length > 0);

  const hasPhotos = capturedImages.length > 0;

  return {
    stream,
    capturedImages,
    countdown,
    isCapturing,
    remainingShots,
    timerDuration,
    isSessionComplete,
    hasPhotos,
    videoRef,
    canvasRef,
    isRetakingPhoto,
    retakePhotoIndex,
    cameraError,
    isLoading,
    startCaptureSession,
    repeatSession,
    retakePhoto,
    downloadAllPhotos,
    clearPhotos,
    handleTimerDurationChange,
    stopCamera,
    retryCamera,
  };
};
