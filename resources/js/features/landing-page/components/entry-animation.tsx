import React from 'react';
import { motion } from 'framer-motion';

interface EntryAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'slide' | 'scale' | 'fade';
  amount?: 'some' | 'all' | number;
  delay?: number;
  className?: string;
  duration?: number;
}

const EntryAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  className,
  duration,
  type,
  amount = 'some',
}: EntryAnimationProps) => {
  let hiddenState = {};
  if (type === 'scale') {
    hiddenState = { opacity: 0, scale: 0.5 };
  } else if (type === 'fade') {
    hiddenState = { opacity: 0 };
  } else {
    hiddenState = {
      opacity: 0,
      x: direction === 'left' ? -75 : direction === 'right' ? 75 : 0,
      y: direction === 'up' ? 75 : direction === 'down' ? -75 : 0,
    };
  }

  const variants = {
    hidden: hiddenState,
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: duration,
        ease: 'easeOut',
        delay: delay,
      }}
      viewport={{ once: true, amount: amount }}
    >
      {children}
    </motion.div>
  );
};

export default EntryAnimation;
