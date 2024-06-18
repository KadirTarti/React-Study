"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaSass,
  FaGraduationCap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiMongodb,
  SiOpenbadges,
  SiPostgresql,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, easeIn } from "framer-motion";
import { Scroll } from "lucide-react";

const about = {
  title: "About Me",
  description: "desc is here",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Abdulkadir Tartilaci",
    },
    {
      fieldName: "GitHub:",
      fieldValue: "/KadirTarti",
    },
    {
      fieldName: "Email:",
      fieldValue: "tartilaci@gmail.com",
    },
    {
      fieldName: "LinkedIn:",
      fieldValue: "/in/tartilaci/",
    },
    
    {
      fieldName: "Work Experience:",
      fieldValue: "9+ Years",
    },
    {
      fieldName: "Xing:",
      fieldValue: "/profile/Abdulkadir_Tartilaci/",
    },
    {
      fieldName: "Languages:",
      fieldValue: "TR, DE, EN",
    },
    {
      fieldName: "Hobbies:",
      fieldValue: "Cooking,Hiking,Volleyball,Basketball",
    },
    {
      fieldName: "Skills:",
      fieldValue: "Javascript,NextJS,React,NodeJS,ExpressJS,MongoDB,Agile,Jira,Git",
    },


   
  ],
};
const experience = {
  icon: { SiOpenbadges },
  title: "My Experience",
  description: "desc is here",
  items: [
    {
      company: "Deutsches Rotes Kreuz",
      position: "Employer(Volunteer)",
      duration: "August 2019 - August 2020",
    },
    {
      company: "Self-Employed",
      position: "Research Mentor and Academic Advisor",
      duration: "January 2017 - March 2019",
    },
    {
      company: "Manisa Celal Bayar University",
      position: "Research Assistent",
      duration: "September 2012 - September 2016",
    },
    {
      company: "Cigli District Government",
      position: "Officer",
      duration: "September 2011 - September 2012",
    },
  ],
};

const education = {
  icon: { FaGraduationCap },
  title: "My Education",
  description: "desc is here",
  items: [
    {
      institution: "Clarusway",
      degree: "Fullstack Developer",
      duration: "November 2023 - November 2024",
    },
    {
      institution: "Bergisches Institut für Weiterbildung",
      degree: "B2 | Foreign Language Instruction",
      duration: "April 2022 - October 2022",
    },
    {
      institution: "Volkhochschule Remscheid",
      degree: "B1 | Foreign Language Instruction",
      duration: "October 2021 - April 2022",
    },
    {
      institution: "Pamukkale University",
      degree: "Master's Degree",
      duration: "October 2012 - August 2016",
    },
    {
      institution: "Suleyman Demirel University",
      degree: "Bachelor's Degree",
      duration: "September 2006 - August 2010",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "desc is here",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaSass />,
      name: "SASS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiMui />,
      name: "MUI",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py:0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex- flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-primary">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-5 border-2 mb-4 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-amber-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                            <p className="text-white/50 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-5 border-2 mb-4 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-amber-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                            <p className="text-white/50 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[10px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329]  border-2 mb-1 rounded-xl rounded-xl flex justify-center items-center gorup">
                              <div className="text-6xl text-amber-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-2 xl:grid-cols-2 gap-y-2 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-3 mt-8"
                      >
                        <span className="text-amber-300 font-bold">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
