'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>Get more done with ALF AI</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-[750] mt-[10px] text-center mb-[15px]'
        >
            הבינה המלאכותית שתהפוך את העסק שלכם לטוב יותר
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[35px] font-[750] text-gray-200 mb-10 mt-[10px] text-center'
        >
            חסכו כסף, זמן וכוח עבודה
        </motion.div>
    </div>
  )
}

export default SkillsText
