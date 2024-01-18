// HeroContent.jsx
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const HeroContent = () => {
  return (
    <motion.div
    variants={slideInFromLeft(0.8)}
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <Image
          src="/mainIconsDark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </div>

      <div className='h-full w-full flex flex-col gap-5 m-auto text-end '>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] ml-[60%] '
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>ALFAI</h1>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto '
        >
            <span className='flex gap-2 flex align-end justify-end' >
         <span> פתרונות ושירותי </span> 
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex align-end justify-end'>AlfAI</span>
         </span>
         <span className=''>בינה מלאכותית לעסקים</span>
        </motion.div>
        <motion.p
          variants={slideInFromRight(0.8)}
          className='text-lg text-gray-400 max-w-[600px] flex align-end justify-end'

        >
          {/* חברה שמספקת שירותי בינה מלאכותית לעסקים */}
        </motion.p>
        <motion.a
          variants={slideInFromRight(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] ml-[45%] '
        >
          למידע נוסף
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
