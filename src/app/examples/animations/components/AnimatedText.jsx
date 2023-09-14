"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedText = () => {
  const [click,setClick] = useState(0)
  return (
    <motion.div
      key={click}
      className='cursor-pointer p-2 border-1 bg-green-300'
      onClick={()=> setClick(prev => prev + 1)}
      initial="initial"
      animate="animate"
      transition={{ delay: 1}}
      exit="exit"
      variants={fadeInOut}
    >
      Fade in and out on click
    </motion.div>
  );
};

export default AnimatedText