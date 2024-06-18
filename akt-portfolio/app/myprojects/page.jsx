'use client';

import {motion} from 'framer-motion'
import React, { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import Link from 'next/link'
import Image from 'next/image'

import gifOne from '../../public/assets/Inventorymaster.gif'
import gifTwo from '../../public/assets/ShoppingApp.gif'


const projects = [
  {
    num: '01',
    category: 'Fullstack',
    title: 'Inventory Master',
    description: 'desc is here',
    stack: [{name: 'React.js'}, {name: 'Redux'}, {name: 'MUI'}, {name: 'Tailwind'}, {name: 'Formik & Yup'}],
    image:  {gifOne},
    live: 'https://akt-inventory-master.netlify.app/',
    github: 'https://github.com/KadirTarti/inventory-master',    
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'C-link E-Markt',
    description: 'desc is here',
    stack: [{name: 'React.js'}, {name: 'Bootstrap'}, {name: 'MockAPI'}, {name: 'Navigation'}],
    image:  {gifTwo},
    live: 'https://shopping-app-akt.netlify.app/',
    github: 'https://github.com/KadirTarti/ShoppingApp',    
  },
]


const MyProjects = () => {

  const [project, setProject] = useState(projects[0]);


  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:-w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div>
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>

          <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-amber-300 transition-all duration-500 capitalize'>
            {project.category}
          </h2>
        </div>
      </div>
    </div>


    </div>

    </motion.section>
  )
}

export default MyProjects