'use client';

import { Button} from '@/components/ui/button'
import { Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'

import {FaLinkedinIn , FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'

import {easeIn, motion} from 'framer-motion'

const info = [
  {
    icon: <FaEnvelope />,
    title: 'E-Mail',
    description: 'tartilaci@gmail.com'
  },{
    icon: <FaLinkedinIn />,
    title: 'LinkedIn',
    description: 'https://www.linkedin.com/in/tartilaci/'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Remscheid, Nord-Rhein Westfallen, Germany'
  },
]

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {delay: 2.4, duration:0.4, ease:easeIn},
    }}
    className="py-6">
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
      <h3 className='text-4xl text-amber-300'>Lets work together!</h3>
      <p className='text-white/50'>
      All contributions from different perspectives greatly enrich my projects! Whether you have new project ideas or contributions to improve my current projects, all contributions are invaluable. Feel free to open a topic or submit a pull request with your suggested changes to start a dialogue about your thoughts. Every contribution plays a vital role in my progress. so thank you for being an integral part of my community!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input type="firstname" placeholder="Firstname" className=""/>
        <Input type="lastname" placeholder="Lastname" className=""/>
        <Input type="email" placeholder="Email Address" className=""/>
        <Input type="phone" placeholder="Phone Number" className=""/>
      </div>

      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a service'/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value='est'>Fullstack Development</SelectItem>
            <SelectItem value='cst'>Frontend Development</SelectItem>
            <SelectItem value='mst'>UI Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Textarea className='h-[200px]' placeholder='Type your message here'/>
      <Button size='md' className='max-w-40 bg-amber-300 text-primary hover:text-amber-300 border border-amber-300 '>Send Message</Button>

      </form>
    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
    <ul className='flex flex-col gap-10'>
      {info.map((item, index)=>{
        return <li key={index} className='flex items-center gap-6'>
          <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-amber-300 rounded-md flex items-center justify-center'>
            <div className='text-[28px]'>{item.icon}</div>
          </div>
          <div className='flex-1'>
            <p className='text-white/50'>{item.title}</p>
            <h3 className='text-xl'>{item.description}</h3>
          </div>
        </li>
      })}
    </ul>
    </div>
    </div>



    </div>

    </div>
    
    
    </motion.section>
  )
}

export default Contact