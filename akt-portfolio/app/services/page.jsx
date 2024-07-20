'use client'

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    href: '',
  },
  {
    num: '02',
    title: 'UI Design',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    href: '',
  },
  {
    num: '03',
    title: '',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    href: '',
  },
  {
    num: '04',
    title: 'Web Development',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    href: '',
  }
]



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto mt-10'>
    <motion.div initial={{opacity: 0}} animate={{ opacity:1, transition: {delay: 0.4, duration: 1.5, ease:'easeIn'}}} 
    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
    {services.map((service, index) =>{
      return <div key={index} className='flex-1 flex flex-col justify-self-center gap-6 group'>
      <div className='w-full flex justify-between items-center'>
      <div className='text-5xl text-amber-300 font-extrabold transition-al duration-500'>{service.num}</div>
      <Link href={service.href} className='w-[50px] h-[50px] rounded-full mr-4 bg-white group-hover:bg-amber-300 transition-all duration-500 flex justify-center items-center hover:rotate-90'>
        <BsArrowDownRight className='text-primary text-3xl'/>
      </Link>
      </div>
      <h2 className='text-[40px] font-bold leading-none text-white group-hover:text-amber-300 transition-all duration-500'>{service.title}</h2>
      <p className='text-white/50'>{service.description}</p>
      <div className="border-b border-white/20 w-full"></div>
      </div>
    })}
    </motion.div>

    </div>
    
    </section>
  )
}

export default Services