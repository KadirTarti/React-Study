"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaSass, FaGraduationCap} from "react-icons/fa"
import {SiTypescript, SiBootstrap, SiTailwindcss, SiMui, SiNextdotjs, SiRedux,  SiPostman,  SiMongodb, SiOpenbadges} from 'react-icons/si'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {ScrollArea} from '@/components/ui/scroll-area'
import {Motion, easeIn} from 'framer-motion'

const about = {
  title: 'About Me',
  description: 'desc is here',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Abdulkadir Tartilaci'
    },
    {
      fieldName: 'GitHub',
      fieldValue: 'https://github.com/KadirTarti'
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'https://www.linkedin.com/in/tartilaci/'
    },
    {
      fieldName: 'Xing',
      fieldValue: 'https://www.xing.com/profile/Abdulkadir_Tartilaci/'
    },
    {
      fieldName: 'Work Experience',
      fieldValue: '7+ Years'
    },
    {
      fieldName: 'Email',
      fieldValue: 'tartilaci@gmail.com'
    },

    {
      fieldName: 'Languages',
      fieldValue: 'Türkish, German, English'
    }
  ]
}

const experience = {
  icon: {SiOpenbadges},
  title: 'My Exprerience',
  description: 'desc is here',
  items: [
    {
      company: 'Deutsches Rotes Kreuz',
      position: 'Employer(Volunteer)',
      duration: 'August 2019 - August 2020'
    },
    {
    company: 'Cigli District Government',
    position: 'Officer',
    duration: 'September 2011 - September 2012'
  },
  {
    company: 'Manisa Celal Bayar University',
    position: 'Research Assistent',
    duration: 'September 2012 - September 2016'
  },
  {
    company: 'Self-Employed',
    position: 'Research Mentor or Academic Advisor',
    duration: 'January 2017 - March 2019'
  },
]
}

const education = {
  icon: {FaGraduationCap},
  title: 'My Education',
  description: 'desc is here',
  items: [
    {
      institution: 'Clarusway',
      degree:  'Fullstack Developer',
      duration: 'November 2023 - November 2024'
    },
    {
      institution: 'Bergisches Institut für Weiterbildung',
      degree:  'B2 | Foreign Language Instruction',
      duration: 'April 2022 - October 2022'
    },
    {
      institution: 'Volkhochschule Remscheid',
      degree:  'B1 | Foreign Language Instruction',
      duration: 'October 2021 - April 2022'
    },
    {
      institution: 'Pamukkale University',
      degree:  'Master\'n\s Degree',
      duration: 'October 2012 - August 2016'
    },
    {
      institution: 'Suleyman Demirel University',
      degree:  'Bachelor\'n\s Degree',
      duration: 'September 2006 - August 2010'
    },
  ]
}

const skills = {
  title: 'My Skills',
  description: 'desc is here',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'HTML5'
    },
    {
      icon: <FaCss3/>,
      name: 'CSS3'
    },
    {
      icon: <FaJs/>,
      name: 'Javascript'
    },
    {
      icon: <FaReact/>,
      name: 'React'
    },
    {
      icon: <FaBootstrap/>,
      name: 'Bootstrap'
    },
    {
      icon: <FaNodeJs/>,
      name: 'NodeJS'
    },
    {
      icon: <FaSass/>,
      name: 'SASS'
    },
    {
      icon: <SiTypescript/>,
      name: 'Typescript'
    },
    {
      icon: <SiTailwindcss/>,
      name: 'Tailwind'
    },
    {
      icon: <SiMui/>,
      name: 'MUI'
    },
    {
      icon: <SiNextdotjs/>,
      name: 'NextJS'
    },
    {
      icon: <SiRedux/>,
      name: 'Redux'
    },
    {
      icon: <SiPostman/>,
      name: 'Postman'
    },
    {
      icon: <SiMongodb/>,
      name: 'MongoDB'
    },
  ]
}


const Resume = () => {
  return (
    <Motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {delay:2.4, duration:0.4, ease:'easeIn'}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py:0'
    >
    <div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList>
        <TabsTrigger>Experience</TabsTrigger>
        <TabsTrigger>Education</TabsTrigger>
        <TabsTrigger>Skills</TabsTrigger>
        <TabsTrigger>About Me</TabsTrigger>
      </TabsList>
    </Tabs>

    </div>


    </Motion.div>
  )
}

export default Resume