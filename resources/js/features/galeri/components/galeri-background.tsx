import { motion } from 'framer-motion';
import { awanData } from '../data/awan-data';

const GaleriBackground = () => {
  const cloudAnimation = {
    y: ['0%', '-5%', '0%'],
    rotate: [0, -1, 1, -1, 0],
  };

  const cloudTransition = {
    duration: 6,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  } as const;

  const baseCloudClasses = 'absolute w-1/3  md:w-1/4 lg:w-1/5 xl:w-1/7 z-20';
  return (
    <div className="max-w-screen h-full overflow-hidden absolute min-h-screen top-0 left-0 right-0 pointer-events-none">
      {awanData.map((awan) => (
        <motion.img
          key={awan.key}
          src="/assets/galeri/awan-gold.webp"
          alt={awan.alt}
          className={`${baseCloudClasses} ${awan.className}`}
          animate={cloudAnimation}
          transition={cloudTransition}
        />
      ))}
      <img
        className="bottom-0 w-screen absolute z-10 h-1/3  "
        src="/assets/galeri/galeri-blur.webp"
        alt="Gradient Blur"
      />
      <img
        className="top-0 w-screen scale-y-[-1] absolute z-10 h-1/3  "
        src="/assets/galeri/galeri-blur.webp"
        alt="Gradient Blur"
      />
    </div>
  );
};

export default GaleriBackground;
