import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const loaderId = React.useId();
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, ease: 'easeOut' }}
      className="absolute z-50 flex flex-col items-center justify-center w-full min-h-screen gap-10 bg-white"
      style={{ pointerEvents: 'none' }}
      onAnimationComplete={() => {
        const el = document.getElementById(loaderId);
        if (el) el.style.display = 'none';
      }}
      id={loaderId}
    >
      <motion.img
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        src="/assets/comingsoon/load.png"
        alt="logo"
        className="h-48 pointer-events-none select-none"
      />
      <p
        className="text-3xl font-sora font-bold text-[#107D8F]"
        style={{
          textShadow: `
                2px 2px 0 #fff,
                -2px 2px 0 #fff,
                2px -2px 0 #fff,
                -2px -2px 0 #fff,
                3px 3px 6px rgba(0,0,0,0.4)
                `,
        }}
      >
        sedang memasak
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            .
          </motion.span>
        ))}
      </p>
    </motion.section>
  );
};

export default Loader;
