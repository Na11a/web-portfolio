"use client";
import { motion } from 'framer-motion';

const parent = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const StaggeredAnimation = () => {
  return (
    <motion.div variants={parent} initial="initial" animate="animate">
      <motion.div variants={child}>Item 1</motion.div>
      <motion.div variants={child}>Item 2</motion.div>
      <motion.div variants={child}>Item 3</motion.div>
    </motion.div>
  );
};

export default StaggeredAnimation
