"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedinIn, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { easeIn, motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "tartilaci@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "https://www.linkedin.com/in/tartilaci/",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Remscheid, Nord-Rhein Westfallen, Germany",
  },
];


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
  .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    publicKey: 'YOUR_PUBLIC_KEY',
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.1, ease: easeIn },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[74%] order-2 xl:order-none">
            <form id="contact-form"
            ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-amber-300">
                "
                <span className="text-pink-900 text-5xl font-extrabold">L</span>
                et's{" "}
                <span className="text-pink-900 text-5xl font-extrabold">M</span>
                ake{" "}
                <span className="text-pink-900 text-5xl font-extrabold">W</span>
                aves{" "}
                <span className="text-pink-900 text-5xl font-extrabold">T</span>
                ogether"!
              </h3>
              <p className="text-white/50">
              Are you looking for a versatile partner who can seamlessly integrate Fullstack Development, Frontend Development, and UI Design? Look no further! With my expertise, we can create innovative and user-friendly solutions that stand out. Whether it's building robust backend systems, crafting stunning front-end interfaces, or designing intuitive user experiences, I am here to collaborate and bring your vision to life. Let's join forces and make waves in the digital world together!
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" name="user_name" />
                <Input type="text" placeholder="Lastname" name="lastname" />
                <Input type="email" placeholder="Email Address" name="user_email" />
                <Input type="tel" placeholder="Phone Number" name="phone" />
              </div>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name='message'
              />
              <Button
                size="md"
                className="max-w-40 bg-amber-300 text-primary hover:text-amber-300 border border-amber-300 "
                type="submit" >
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[32px] h-[32px] xl:w-[42px] xl:h-[42px] bg-[#27272c] text-amber-300 rounded-md flex items-center justify-center">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/50">{item.title}</p>
                      <h3 className="text-l">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
}

export default Contact;
