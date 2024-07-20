"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdLiveTv } from "react-icons/md";

import {  BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

import gifOne from "../../public/assets/Inventorymaster.gif";
import gifTwo from "../../public/assets/ShoppingApp.gif";
import gifThree from "../../public/assets/bestmovies.gif";
import gifFour from "../../public/assets/ApointmentApp.gif";
import SliderButtons from "@/components/helpers/SliderButtons";


const projects = [
  {
    num: "01",
    category: "Fullstack Project",
    title: "Inventory Master",
    description:
      "Inventory Master is a comprehensive inventory management system designed to streamline the tracking, management, and organization of inventory for both business and personal use.",
    stack: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "MUI" },
      { name: "Tailwind" },
      { name: "Formik & Yup" },
    ],
    image: gifOne,
    live: "https://akt-inventory-master.netlify.app/",
    github: "https://github.com/KadirTarti/inventory-master",
  },
  {
    num: "02",
    category: "Fullstack Project",
    title: "C-link E-Markt",
    description:
      'In this project, a single-page web application is designed where users can add new products to their shopping lists, store these products on a mock API and update them in their shopping carts.',
    stack: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "MockAPI" },
      { name: "Navigation" },
    ],
    image: gifTwo,
    live: "https://shopping-app-akt.netlify.app/",
    github: "https://github.com/KadirTarti/ShoppingApp",
  },
  {
    num: "03",
    category: "Frontend Project",
    title: "The Best Movies of Recent Times",
    description:
      'In this project, some of the movies on the list of the best movies of recent times on the imdb website were shot from a specific database and printed on the screen.',
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: gifThree,
    live: "https://best-movie-of-recent-times.netlify.app/",
    github: "https://github.com/KadirTarti/Best-Movies-Website",
  },
  {
    num: "04",
    category: "Frontend Project",
    title: "MT Car Repair Appointment",
    description:
      "In this project, an interactive Appointment Application was developed. On the home page, under the Booking heading, there is the name and image of the repair operation for which an appointment will be made.",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: gifFour,
    live: "https://anappointmentapp.netlify.app//",
    github: "https://github.com/KadirTarti/ApointmentApp",
  },
];

const MyProjects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swipper) => {
    const currentIndex = swipper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration:0.4, ease:easeIn} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:-w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              
              <div className="text-6xl leading-none font-extrabold text-white text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-300 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/50">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-amber-300 ">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <MdLiveTv className="text-white text-3xl group-hover:text-amber-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-amber-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Source Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
          <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return ( 
                  <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group  flex justify-center items-center bg-white">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-[98%] h-[98%]">
                    <Image src={project.image} alt="projectImage" fill className="object-cover"/>
                  </div>

                  </div>
                  </SwiperSlide>
                  );
                  })}
                  <SliderButtons 
                  containerStyles='flex gap-2 absolute left-0 bottom-0 xl:bottom-0 z-20 justify-between xl:W-max xl:justify-none' 
                  buttonStyles='bg-amber-300 hover:bg-amber-300-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all '/>
              </Swiper>
              </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MyProjects;
