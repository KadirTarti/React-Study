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
    

    
  }
]


const MyProjects = () => {
  return (
    <div>MyProjects</div>
  )
}

export default MyProjects