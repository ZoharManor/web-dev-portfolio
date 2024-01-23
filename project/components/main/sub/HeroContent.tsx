// HeroContent.jsx
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.8)}
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 mt-10 lg:mt-40 w-full z-[20] text-right"
    >
      <div className="w-full lg:w-full h-full flex justify-center items-center mb-6 lg:mb-0">
        <Image
          src="/mainIconsDark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </div>

      <div className="h-full w-full flex flex-col gap-3 text-right lg:text-end">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-2 lg:py-[8px] lg:px-[7px] border border-[#7042f88b] opacity-[0.9] lg:ml-auto "
        >
          <SparklesIcon className="text-[#b49bff] mr-2 lg:mr-10 h-5 w-5 " />
          <h1 className="Welcome-text text-[11px] lg:text-[18px] text-right">
            ALFAI
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-3 mt-3 text-4xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0 "
        >
          <span className="flex gap-1 ml-auto">
            <span>פתרונות ושירותי</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AlfAI
            </span>
          </span>
          <span className="flex gap-1 ml-auto">בינה מלאכותית </span>
        </motion.div>
        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-base lg:text-sm text-gray-400 max-w-[600px] mx-auto lg:mx-0 text-right"
        >
          {/* חברה שמספקת שירותי בינה מלאכותית לעסקים */}
        </motion.p>
        <motion.a
          variants={slideInFromRight(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]  ml-auto text-right px-2"
        >
          למידע נוסף
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
