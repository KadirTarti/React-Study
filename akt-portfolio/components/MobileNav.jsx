'use client';

import {Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'


const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

const MobileNav = () => {
  const pathname = usePathname();


  return <Sheet>
  <SheetTrigger className='flex justify-center items-center'>
  <CiMenuFries className='text-[32px] text-yellow-500'/>
  </SheetTrigger>
  <SheetContent className='flex flex-col'>

  <div className="logo">LOGO</div>

  </SheetContent>
      </Sheet>
}

export default MobileNav