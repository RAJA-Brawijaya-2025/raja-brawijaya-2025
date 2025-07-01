import { Button } from '@/shared/components/ui/button';
import React, { useEffect, useState } from 'react';

interface PhotoBoothProps {
  stream: MediaStream | null;
  capturedImages: string[];
  countdown: number | null;
  isCapturing: boolean;
  remainingShots: number;
  timerDuration: number;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  cameraError?: string | null;
  isLoading?: boolean;
  onStartCaptureSession: () => void;
  onDownloadAllPhotos: () => void;
  onClearPhotos: () => void;
  onTimerDurationChange: (duration: number) => void;
  onRepeatSession?: () => void;
  onNext?: () => void;
  onRetakePhoto?: (photoIndex: number) => void;
  onRetryCamera?: () => void;
  isRetakingPhoto?: boolean;
  retakePhotoIndex?: number | null;
}

const PhotoBooth: React.FC<PhotoBoothProps> = ({
  stream,
  capturedImages,
  countdown,
  isCapturing,
  timerDuration,
  videoRef,
  canvasRef,
  cameraError,
  isLoading = false,
  onStartCaptureSession,
  onTimerDurationChange,
  onRepeatSession,
  onNext,
  onRetakePhoto,
  onRetryCamera,
  isRetakingPhoto = false,
  retakePhotoIndex = null,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isSessionComplete =
    capturedImages.length === 3 &&
    !isCapturing &&
    !isRetakingPhoto &&
    capturedImages.every((img) => img && img.length > 0);

  const getPhotoClickHandler = (index: number) =>
    !isSessionComplete || !onRetakePhoto
      ? undefined
      : () => onRetakePhoto(index);

  const renderCameraArea = () => {
    if (isLoading) {
      return (
        <div className="aspect-video bg-gray-800 w-full rounded-lg flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white">Memuat kamera...</p>
          </div>
        </div>
      );
    }

    if (cameraError) {
      return (
        <div className="aspect-video bg-red-900/20 border-2 border-red-500 w-full rounded-lg flex items-center justify-center">
          <div className="text-center p-4">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-red-500 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-red-300 mb-4 text-sm font-medium">
              {cameraError}
            </p>
            <div className="space-y-2">
              <p className="text-red-200 text-xs">Tips untuk memperbaiki:</p>
              <ul className="text-red-200 text-xs text-left space-y-1">
                <li>• Pastikan browser memiliki akses kamera</li>
                <li>• Tutup aplikasi lain yang menggunakan kamera</li>
                <li>• Refresh halaman dan coba lagi</li>
              </ul>
            </div>
            {onRetryCamera && (
              <Button
                onClick={onRetryCamera}
                variant="destructive"
                className="bg-red-600 hover:bg-red-700 mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>{' '}
                    Mencoba...
                  </>
                ) : (
                  'Coba Lagi'
                )}
              </Button>
            )}
          </div>
        </div>
      );
    }

    if (!stream) {
      return (
        <div className="aspect-video bg-gray-800 w-full rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-400 mb-4">Kamera belum diaktifkan</p>
            {onRetryCamera && (
              <Button
                onClick={onRetryCamera}
                variant="secondary"
                className="bg-gray-600 hover:bg-gray-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>{' '}
                    Mengaktifkan...
                  </>
                ) : (
                  'Aktifkan Kamera'
                )}
              </Button>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full rounded-lg object-cover"
          style={{ transform: isMobile ? 'scaleX(-1)' : 'none' }}
          onLoadStart={() => console.log('Video load started')}
          onLoadedData={() => console.log('Video loaded')}
          onPlay={() => console.log('Video playing')}
          onError={(e) => {
            console.error('Video error:', e);
            if (onRetryCamera) {
              onRetryCamera();
            }
          }}
        />
      </div>
    );
  };

  const renderCapturedImages = () => (
    <div className="w-full mt-4 md:mt-0 flex flex-col gap-4">
      <div
        className={`grid gap-5 ${
          isMobile
            ? 'grid-cols-1 gap-8'
            : 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
        }`}
      >
        {Array.from({ length: 3 }).map((_, index) => {
          const img = capturedImages[index];
          return (
            <div
              key={`photo-slot-${index}`}
              onClick={img ? getPhotoClickHandler(index) : undefined}
              className={`aspect-video group transition-all bg-primary-100 border border-primary-300 rounded-lg relative overflow-hidden flex items-center justify-center ${
                img ? 'cursor-pointer hover:ring-blue-400' : ''
              } ${
                isRetakingPhoto && retakePhotoIndex === index
                  ? 'ring-2 ring-yellow-400'
                  : ''
              }`}
            >
              {img ? (
                <>
                  <img
                    src={img}
                    alt={`Captured ${index + 1}`}
                    className="w-full h-full object-cover bg-white"
                  />
                  {isSessionComplete && (
                    <div className="absolute inset-0 hover:bg-black/50 flex items-center justify-center transition-all">
                      <div className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold">
                        Klik untuk ulang
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="">
                  <img
                    src="/assets/photobooth/imgkosong.png"
                    alt=""
                    className="w-10 h-10 z-20"
                  />
                </div>
              )}
              {isRetakingPhoto && retakePhotoIndex === index && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Foto ulang
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderButtons = () => (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 mt-4">
      {onRepeatSession && (
        <Button
          variant="secondary"
          onClick={onRepeatSession}
          className="py-4 md:py-6 px-8 text-sm md:text-xl font-semibold w-full md:w-fit"
        >
          Ulangi
        </Button>
      )}
      {onNext && (
        <Button
          variant="default"
          onClick={onNext}
          className="py-4 md:py-6 px-8 text-sm md:text-xl font-semibold w-full md:w-fit"
        >
          Selanjutnya
        </Button>
      )}
    </div>
  );

  const renderCountdown = () =>
    countdown !== null &&
    countdown > 0 &&
    (isCapturing || isRetakingPhoto) && (
      <div className="my-6 flex items-center justify-center pointer-events-none">
        <div className="relative text-5xl md:text-8xl font-bold animate-pulse">
          <div
            className="absolute"
            style={{
              WebkitTextStroke: '3px white',
              color: 'transparent',
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))',
            }}
          >
            {countdown}
          </div>
          <div
            className="relative"
            style={{
              background:
                'linear-gradient(90.01deg, #1D5D77 0%, #4FC5CE 108.39%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {countdown}
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center px-4 text-white font-sora relative z-50">
      <div className="relative mb-10 text-center">
        <h5
          className="absolute text-2xl md:text-5xl font-bold"
          style={{
            WebkitTextStroke: '2px #fff',
            color: 'transparent',
            filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))',
          }}
        >
          {!isSessionComplete && !isRetakingPhoto
            ? 'Gaya dulu, dong!!!'
            : isRetakingPhoto
              ? 'Foto ulang nih!'
              : 'Fotomu udah siap!'}
        </h5>
        <h5
          className="relative text-2xl md:text-5xl font-bold bg-clip-text text-transparent"
          style={{
            background:
              'linear-gradient(90.01deg, #1D5D77 0%, #4FC5CE 108.39%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {!isSessionComplete && !isRetakingPhoto
            ? 'Gaya dulu, dong!!!'
            : isRetakingPhoto
              ? 'Foto ulang nih!'
              : 'Fotomu udah siap!'}
        </h5>
      </div>

      <div className="flex flex-col md:flex-row w-full 2xl:max-w-4xl xl:max-w-2xl max-w-sm md:px-0 lg:max-w-xl md:max-w-xl gap-4">
        <div
          className={`md:w-10/12 w-full flex-col items-center justify-center ${
            isMobile && isSessionComplete && !isRetakingPhoto
              ? 'hidden'
              : 'flex'
          }`}
        >
          <div className={`w-full flex-col items-center justify-center flex`}>
            {renderCameraArea()}
          </div>
          {!isCapturing && !isSessionComplete && !isRetakingPhoto && (
            <div className="mt-4 w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex justify-between md:justify-normal items-center w-full gap-2">
                <span className="text-xl text-white font-sora font-bold">
                  Timer:
                </span>
                <select
                  value={timerDuration}
                  onChange={(e) =>
                    onTimerDurationChange(Number(e.target.value))
                  }
                  className="px-3 py-3 border border-primary-300 bg-white text-primary-300 rounded-lg"
                >
                  <option value={3}>3 detik</option>
                  <option value={5}>5 detik</option>
                  <option value={10}>10 detik</option>
                </select>
              </div>
              <Button
                onClick={onStartCaptureSession}
                disabled={!stream || isLoading}
                className="py-6 px-8 rounded-lg w-full md:w-fit text-sm md:text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {capturedImages.length > 0 ? 'Lanjut Foto' : 'Mulai Foto'}
              </Button>
            </div>
          )}
          {renderCountdown()}
          {!isMobile && isSessionComplete && renderButtons()}
        </div>

        <div className="md:w-3/12 w-full">{renderCapturedImages()}</div>
      </div>

      {isMobile && isSessionComplete && renderButtons()}

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default PhotoBooth;
