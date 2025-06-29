import { motion } from 'framer-motion';

const CloudFrame = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5.2, duration: 1 }}
      className="absolute w-full h-screen overflow-hidden"
    >
      <motion.img
        src="/assets/comingsoon/awan.png"
        alt="awan"
        className="absolute top-0 left-0 w-1/3 pointer-events-none select-none z-30"
        initial={{ y: -40 }}
        animate={{ y: [-40, 0, -40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/assets/comingsoon/awan.png"
        alt="awan"
        className="absolute top-0 right-0 w-1/3 pointer-events-none select-none z-30"
        initial={{ y: -40, scaleX: -1 }}
        animate={{ y: [-40, 0, -40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/assets/comingsoon/awan.png"
        alt="awan"
        className="absolute bottom-0 right-0 w-1/3 pointer-events-none select-none z-30"
        initial={{ y: 40, rotate: 180 }}
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/assets/comingsoon/awan.png"
        alt="awan"
        className="absolute bottom-0 left-0 w-1/3 pointer-events-none select-none z-30"
        initial={{ y: 40, scaleX: -1, rotate: 180 }}
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.section>
  );
};

export default CloudFrame;
