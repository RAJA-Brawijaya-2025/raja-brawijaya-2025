import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import RabrawHead from '../components/RabrawHead';
import Ornaments from '../components/Ornaments';
import Awan from '../components/Awan';
import PhotoBooth from '../components/PhotoBooth';
import { usePhotoBooth } from '../hooks/usePhotoBooth';

const PhotoboothContainer = () => {
  const {
    stream,
    capturedImages,
    countdown,
    isCapturing,
    remainingShots,
    timerDuration,
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
    retryCamera,
  } = usePhotoBooth();

  const handleNext = () => {
    sessionStorage.setItem('capturedImages', JSON.stringify(capturedImages));
    router.get('/photo-result');
  };

  return (
    <main className="photo-booth-bg w-full min-h-screen p-2 relative">
      <Head title="Photo Booth" />
      <RabrawHead />
      <Awan />
      <Ornaments />
      <PhotoBooth
        stream={stream}
        capturedImages={capturedImages}
        countdown={countdown}
        isCapturing={isCapturing}
        remainingShots={remainingShots}
        timerDuration={timerDuration}
        videoRef={videoRef}
        canvasRef={canvasRef}
        cameraError={cameraError}
        isLoading={isLoading}
        isRetakingPhoto={isRetakingPhoto}
        retakePhotoIndex={retakePhotoIndex}
        onStartCaptureSession={startCaptureSession}
        onDownloadAllPhotos={downloadAllPhotos}
        onClearPhotos={clearPhotos}
        onTimerDurationChange={handleTimerDurationChange}
        onRepeatSession={repeatSession}
        onRetakePhoto={retakePhoto}
        onRetryCamera={retryCamera}
        onNext={handleNext}
      />
    </main>
  );
};

export default PhotoboothContainer;
