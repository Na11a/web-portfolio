"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const keyframeVariants = {
  initial: { opacity: 0, scale: 1 },
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [1, 1.5, 0.5, 1],
    transition: { duration: 2, times: [0, 0.2, 0.8, 1] },
  },
};

const KeyframeAnimation = () => {
  const [click,setClick] = useState(0)
  return (
    <>
    <p onClick={() => setClick(prev => prev + 1)} className='cursor-pointer'>Restart</p>
    <motion.div
      key={click}
      variants={keyframeVariants}
      initial="initial"
      animate="animate"
      style={{ backgroundColor: 'purple', width: 100, height: 100 }}
    />
    </>  
  );};
export default KeyframeAnimation