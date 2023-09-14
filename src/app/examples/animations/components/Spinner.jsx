"use client"
import { motion } from 'framer-motion';

const spinVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: { duration: 2, repeat: Infinity },
  },
};

const Spinner = () => {
  const handleAnimationStart = () => {
    console.log('Animation started');
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed');
  };

  return (
    <motion.div
      variants={spinVariants}
      initial="initial"
      animate="animate"
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      style={{ backgroundColor: 'green', width: 100, height: 100 }}
    />
  );
};

export default Spinner