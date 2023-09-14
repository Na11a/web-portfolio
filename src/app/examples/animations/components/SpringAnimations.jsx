"use client"
import { motion } from 'framer-motion';

const scaleSpring = {
  type: 'spring',
  stiffness: 150,
  damping: 1000,
};

const SpringAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={scaleSpring}
      style={{ backgroundColor: 'orange', width: 100, height: 100 }}
    />
  );
};

export default SpringAnimation