"use client"
import { motion } from 'framer-motion';

export const DraggableBox = () => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 50 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
      }}>
        <span className='flex justify-center items-center h-full text-white'>Draggable</span>
      </motion.div>
  );
};

export const HoverableBox = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }}
    >
      <span className='flex justify-center items-center h-full text-white'>Hoverable</span>
    </motion.div>
  );
};

