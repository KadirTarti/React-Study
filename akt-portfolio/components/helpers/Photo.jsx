"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../public/assets/myphoto.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >

      {/* myphoto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeOut" },
          }}
          className="w-[200px] h-[200px] xl:w-[270px] xl:h-[270px] mix-blend-lighten absolute rounded-full ml-32 mt-3 overflow-hidden"
        >
          <Image
            src={photo}
            alt={andulkadirsPhoto}
            width={'30%'}
            priority
            quality={100}
            // fill
            className="object-contain"
          />
        </motion.div>

      {/* animation effect */}
      <motion.svg className='w-[300px] xl:w-[500px] h-[300px] xl:w-[500px]'
      fill='transparent'
      viewBox= '0 0 510 510'
      xmlns='http://www.w3.org/2000/svg'>
        <motion.circle
        
            cx='280'
            cy='255'
            r='250'
            stroke='#990033'
            strokeWidth='6'
            strokeLinecap='square'
            strokeLinejoin='square'
            initial={{strokeDasharray: '34 20 5 5'}}
            animate={{
                strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 33 33'],
                rotate: [360, 360]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        />
      </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
