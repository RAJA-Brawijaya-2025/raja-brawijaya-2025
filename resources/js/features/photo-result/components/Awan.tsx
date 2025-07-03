import { motion } from 'framer-motion';

const Awan = () => {
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

  return (
    <div className="w-full h-full absolute z-10 left-0 top-0 overflow-hidden pointer-events-none">
      <motion.img
        src="/assets/photobooth/awan.png"
        alt="awan kiri"
        className="absolute top-0 left-0 w-1/2 md:w-1/3 lg:w-1/4 xl:2/4 md:max-w-sm lg:max-w-md"
        animate={cloudAnimation}
        transition={cloudTransition}
      />

      <motion.img
        src="/assets/photobooth/awan.png"
        alt="awan kanan"
        className="absolute top-0 right-0 w-1/2 md:w-1/3 lg:w-1/4 xl:2/4 md:max-w-sm lg:max-w-md scale-x-[-1]"
        animate={cloudAnimation}
        transition={cloudTransition}
      />
    </div>
  );
};

export default Awan;
