import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { imageToBase64 } from '@/shared/lib/utils';

const FrameDesain2 = React.forwardRef<HTMLDivElement, { images: string[] }>(
  ({ images }, ref) => (
    <div ref={ref} className="relative w-full max-w-xs sm:max-w-sm">
      <div className="relative bg-[linear-gradient(180deg,_#13B2BE_7.21%,_#FFFFFF_75.48%)] sm:p-12 p-8  drop-shadow-xl flex flex-col gap-3">
        <img
          src={'/assets/photoresult/ornament-right.png'}
          alt="Ornament Pattern Kanan"
          className="absolute top-[20%] right-0 w-[50%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-left.svg'}
          alt="Ornament Pattern Kiri"
          className="absolute bottom-[10%] left-0 w-[25%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-left-bot.svg'}
          alt="Ornament Pattern Kiri Bawah"
          className="absolute bottom-[20%] left-0 w-[25%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-bottom.svg'}
          alt="Ornament Pattern Bawah"
          className="absolute bottom-0 left-1/2 w-[60%] -translate-x-1/2 z-10"
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto object-cover rounded-md relative z-20"
          />
        ))}
        <img
          src={'/assets/photoresult/mahkota-frame2.png'}
          alt="Mahkota"
          className="absolute top-0 left-1/2 w-[60%] -translate-x-1/2 -mt-[3%] z-30"
        />
        <img
          src={'/assets/photoresult/ornament-bot-frame2.png'}
          alt="Dekorasi Bawah"
          className="absolute bottom-[-2%] left-1/2 w-[90%] -translate-x-1/2 z-30"
        />
        <img
          src={'/assets/photoresult/image-right.png'}
          alt="Dekorasi Kanan"
          className="absolute top-[40%] right-0 w-[25%] -translate-y-1/2 z-30"
        />
        <img
          src={'/assets/photoresult/image-left.png'}
          alt="Dekorasi Kiri"
          className="absolute bottom-0 left-0 w-[25%] -translate-y-1/2 z-30"
        />
      </div>
    </div>
  ),
);

const FrameDesain = React.forwardRef<HTMLDivElement, { images: string[] }>(
  ({ images }, ref) => (
    <div ref={ref} className="relative w-full max-w-xs sm:max-w-sm">
      <div className="relative bg-[linear-gradient(180deg,_#13B2BE_7.21%,_#FFFFFF_75.48%)] sm:p-12 p-8  drop-shadow-xl flex flex-col gap-3">
        <img
          src={'/assets/photoresult/ornament-right.png'}
          alt="Ornament Pattern Kanan"
          className="absolute top-[20%] right-0 w-[50%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-left.svg'}
          alt="Ornament Pattern Kiri"
          className="absolute bottom-[10%] left-0 w-[25%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-left-bot.svg'}
          alt="Ornament Pattern Kiri Bawah"
          className="absolute bottom-[20%] left-0 w-[25%] -translate-y-1/2 z-10"
        />
        <img
          src={'/assets/photoresult/ornament-bottom.svg'}
          alt="Ornament Pattern Bawah"
          className="absolute bottom-0 left-1/2 w-[60%] -translate-x-1/2 z-10"
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto object-cover rounded-md relative z-20"
          />
        ))}
        <img
          src={'/assets/photoresult/coming-soon.png'}
          alt="Mahkota"
          className="absolute top-0 left-1/2 w-[60%] -translate-x-1/2 -mt-[3%] z-30"
        />
        <img
          src={'/assets/photoresult/image-bawah.png'}
          alt="Dekorasi Bawah"
          className="absolute bottom-[-2%] left-1/2 w-full -translate-x-1/2 z-30"
        />
        <img
          src={'/assets/photoresult/image-right.png'}
          alt="Dekorasi Kanan"
          className="absolute top-[40%] right-0 w-[25%] -translate-y-1/2 z-30"
        />
        <img
          src={'/assets/photoresult/image-left.png'}
          alt="Dekorasi Kiri"
          className="absolute bottom-0 left-0 w-[25%] -translate-y-1/2 z-30"
        />
      </div>
    </div>
  ),
);

type CustomPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function CustomPopup({
  isOpen,
  onClose,
  onConfirm,
}: CustomPopupProps): React.ReactElement | null {
  if (!isOpen) return null;

  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsShowing(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsShowing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50 p-4 transition-opacity duration-1000 ease-in-out font-sora ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}
    >
      <div
        className={`bg-white p-12 rounded-2xl shadow-2xl text-center max-w-sm w-full transition-all duration-1000 ease-out 
                           border-2 border-[#1D5D77]
                           ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <h3 className="text-2xl font-bold text-[#0D5C63]">
          Yay! Fotomu cakep!
        </h3>
        <p className="text-gray-500 mt-2 mb-6">
          Satu foto udah cakep, tapi jodoh belum kelihatan :(
          <br />
          Yuk foto lagi!
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="secondary"
            onClick={onClose}
            className="px-6 py-3 border-2 border-[#1D5D77] rounded-lg shadow-md font-semibold transition-transform transform hover:scale-105 cursor-pointer"
          >
            Ngga, deh
          </Button>
          <Button
            onClick={onConfirm}
            className="px-10 py-3 bg-[#1D5D77] text-white rounded-lg shadow-lg font-semibold transition-transform transform hover:scale-105 cursor-pointer"
          >
            Gas!
          </Button>
        </div>
      </div>
    </div>
  );
}

function PhotoResult(): React.ReactElement {
  const [selectedFrame, setSelectedFrame] = useState<'desain' | 'basic'>(
    'desain',
  );
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImages = sessionStorage.getItem('capturedImages');
      if (storedImages) {
        try {
          setCapturedImages(JSON.parse(storedImages));
        } catch (e) {
          console.error('Gagal parse sessionStorage:', e);
        }
      }
    }
    setIsLoading(false);
  }, []);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  };

  const drawRoundedImage = (
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) => {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(image, x, y, width, height);
    ctx.restore();
  };

  const downloadFrameAsImage = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      const base64Images = await Promise.all(
        capturedImages.map((url) => imageToBase64(url)),
      );

      // Definisikan path aset untuk KEDUA frame
      const frame1ForegroundPaths = {
        comingSoon: '/assets/photoresult/coming-soon.png',
        imageBawah: '/assets/photoresult/image-bawah.png',
        imageRight: '/assets/photoresult/image-right.png',
        imageLeft: '/assets/photoresult/image-left.png',
      };

      const frame1BackgroundPaths = {
        ornamentLeft: '/assets/photoresult/ornament-left.svg',
        ornamentRight: '/assets/photoresult/ornament-right.png',
        ornamenLeftBot: '/assets/photoresult/ornament-left-bot.svg', // Koreksi typo dari kode asli
        ornamentBottom: '/assets/photoresult/ornament-bottom.svg',
      };

      const frame2ForegroundPaths = {
        mahkota: '/assets/photoresult/mahkota-frame2.png',
        ornamentBot: '/assets/photoresult/ornament-bot-frame2.png',
        imageRight: '/assets/photoresult/image-right.png',
        imageLeft: '/assets/photoresult/image-left.png',
      };

      const frame2BackgroundPaths = frame1BackgroundPaths;
      const base64Foregrounds: any = {};
      const base64Backgrounds: any = {};

      if (selectedFrame === 'desain') {
        await Promise.all([
          ...Object.entries(frame1ForegroundPaths).map(async ([key, path]) => {
            base64Foregrounds[key] = await imageToBase64(path).catch(
              () => null,
            );
          }),
          ...Object.entries(frame1BackgroundPaths).map(async ([key, path]) => {
            base64Backgrounds[key] = await imageToBase64(path).catch(
              () => null,
            );
          }),
        ]);
      } else {
        await Promise.all([
          ...Object.entries(frame2ForegroundPaths).map(async ([key, path]) => {
            base64Foregrounds[key] = await imageToBase64(path).catch(
              () => null,
            );
          }),
          ...Object.entries(frame2BackgroundPaths).map(async ([key, path]) => {
            base64Backgrounds[key] = await imageToBase64(path).catch(
              () => null,
            );
          }),
        ]);
      }

      const scale = 3;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context tidak tersedia');

      const frameWidth = 320;
      const frameHeight = 500;

      canvas.width = frameWidth * scale;
      canvas.height = frameHeight * scale;
      ctx.scale(scale, scale);

      const gradient = ctx.createLinearGradient(0, 0, 0, frameHeight);
      gradient.addColorStop(0.0721, '#13B2BE');
      gradient.addColorStop(0.7548, '#FFFFFF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, frameWidth, frameHeight);

      if (base64Backgrounds.ornamentRight) {
        const img = await loadImage(base64Backgrounds.ornamentRight);
        const w = frameWidth * 0.5;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, frameWidth - w, frameHeight * 0.2 - h / 2, w, h);
      }
      if (base64Backgrounds.ornamentLeft) {
        const img = await loadImage(base64Backgrounds.ornamentLeft);
        const w = frameWidth * 0.25;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, 0, frameHeight * 0.5 - h / 2, w, h);
      }
      if (base64Backgrounds.ornamenLeftBot) {
        const img = await loadImage(base64Backgrounds.ornamenLeftBot);
        const w = frameWidth * 0.25;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, 0, frameHeight * 0.8 - h / 2, w, h);
      }
      if (base64Backgrounds.ornamentBottom) {
        const img = await loadImage(base64Backgrounds.ornamentBottom);
        const w = frameWidth * 0.6;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, (frameWidth - w) / 2, frameHeight - h, w, h);
      }

      const padding = 48;
      const gap = 12;
      let currentY = padding;
      for (const imgData of base64Images) {
        const img = await loadImage(imgData);
        const photoWidth = frameWidth - padding * 2;
        const photoHeight = (img.height / img.width) * photoWidth;
        drawRoundedImage(
          ctx,
          img,
          padding,
          currentY,
          photoWidth,
          photoHeight,
          8,
        );
        currentY += photoHeight + gap;
      }

      if (selectedFrame === 'desain') {
        if (base64Foregrounds.comingSoon) {
          const img = await loadImage(base64Foregrounds.comingSoon);
          const w = frameWidth * 0.6;
          const h = (img.height / img.width) * w;
          ctx.drawImage(img, (frameWidth - w) / 2, -frameHeight * 0.01, w, h);
        }
        if (base64Foregrounds.imageBawah) {
          const img = await loadImage(base64Foregrounds.imageBawah);
          const w = frameWidth;
          const h = (img.height / img.width) * w;
          ctx.drawImage(img, 0, frameHeight - h * 0.98, w, h);
        }
      } else {
        if (base64Foregrounds.mahkota) {
          const img = await loadImage(base64Foregrounds.mahkota);
          const w = frameWidth * 0.6;
          const h = (img.height / img.width) * w;
          ctx.drawImage(img, (frameWidth - w) / 2, -frameHeight * 0.01, w, h);
        }
        if (base64Foregrounds.ornamentBot) {
          const img = await loadImage(base64Foregrounds.ornamentBot);
          const w = frameWidth * 0.9;
          const h = (img.height / img.width) * w;
          ctx.drawImage(img, (frameWidth - w) / 2, frameHeight - h * 0.9, w, h);
        }
      }

      if (base64Foregrounds.imageRight) {
        const img = await loadImage(base64Foregrounds.imageRight);
        const w = frameWidth * 0.25;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, frameWidth - w, frameHeight * 0.4 - h / 2, w, h);
      }
      if (base64Foregrounds.imageLeft) {
        const img = await loadImage(base64Foregrounds.imageLeft);
        const w = frameWidth * 0.25;
        const h = (img.height / img.width) * w;
        ctx.drawImage(img, 0, frameHeight * 0.6 - h / 2, w, h);
      }

      const uniqueId = Date.now();
      const finalImage = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `comingsoon-rabraw-${uniqueId}.png`;
      link.href = finalImage;
      link.click();

      setTimeout(() => {
        setShowPopup(true);
      }, 500);
    } catch (error) {
      console.error('Gagal membuat gambar dengan Canvas:', error);
      alert('Terjadi kesalahan saat membuat gambar.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Memuat...</p>
      </div>
    );
  }

  return (
    <main className="w-full  p-4 flex flex-col items-center justify-center gap-4 overflow-x-hidden">
      <div className="text-center  block sm:hidden">
        <div className="relative">
          <h5
            className="absolute w-full left-0 text-3xl  font-extrabold"
            style={{
              WebkitTextStroke: '2px white',
              color: 'transparent',
              filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.3))',
            }}
          >
            Wala! Fotomu jadi!
          </h5>
          <h5
            className="relative text-3xl  font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                'linear-gradient(90.01deg, #1D5D77 0%, #4FC5CE 108.39%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Wala! Fotomu jadi!
          </h5>
        </div>
        <p
          className="text-md text-[#1D5D77] font-extrabold"
          style={{ WebkitTextStroke: '0.6px white' }}
        >
          Sekarang pilih frame, bukan nasib!
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-8 transform scale-75 sm:scale-90">
        <div
          onClick={() => !isProcessing && setSelectedFrame('desain')}
          className={`sm:rotate-0 rotate-[-10deg] cursor-pointer transition-all drop-shadow-[5vw] transition-transform duration-500 hover:scale-105 ${selectedFrame === 'desain' ? 'ring-6 ring-offset-0 ring-blue-500  z-10' : 'opacity-100'}`}
        >
          <FrameDesain images={capturedImages} />
        </div>
        <div
          onClick={() => !isProcessing && setSelectedFrame('basic')}
          className={`sm:rotate-0 rotate-[8deg] sm:translate-y-0 -translate-y-10 cursor-pointer transition-all drop-shadow-[5vw] transition-transform duration-500 hover:scale-105 ${selectedFrame === 'basic' ? 'ring-6 ring-offset-0 ring-blue-500  z-20 translate-y-0' : 'opacity-100'}`}
        >
          <FrameDesain2 images={capturedImages} />
        </div>
      </div>

      <div className="text-center flex flex-col  w-full sm:block hidden">
        <div className="relative mt-[-2vw]">
          <h5
            className="absolute w-full left-0 text-[clamp(7vw,9vw,10rem)] font-extrabold"
            style={{
              WebkitTextStroke: '2px white',
              color: 'transparent',
              filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.3))',
            }}
          >
            Wala! Fotomu jadi!
          </h5>
          <h5
            className="relative text-[clamp(7vw,9vw,10rem)]  h-[15vw]  font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                'linear-gradient(90.01deg, #1D5D77 0%, #4FC5CE 108.39%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Wala! Fotomu jadi!
          </h5>
        </div>
        <p
          className="  text-[clamp(3vw,3vw,5rem)]  mt-[-3vw] mb-[2vw] text-[#1D5D77] font-extrabold"
          style={{ WebkitTextStroke: '0.6px white' }}
        >
          Sekarang pilih frame, bukan nasib!
        </p>
      </div>

      <Button
        onClick={downloadFrameAsImage}
        disabled={capturedImages.length === 0 || isProcessing}
        className="text-xl md:text-2xl font-extrabold h-14 mt-[2vw] px-10 cursor-pointer"
      >
        {isProcessing ? 'Memproses...' : 'Download'}
      </Button>

      <CustomPopup
        isOpen={showPopup}
        onClose={() => {
          window.location.href = '/coming-soon';
        }}
        onConfirm={() => {
          window.location.href = '/photo-booth';
        }}
      />
    </main>
  );
}

export default PhotoResult;
