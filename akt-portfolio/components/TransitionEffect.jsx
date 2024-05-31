'use client';

import { AnimatePresence, motion } from 'framer-motion'
import {usePathname } from 'next/navigation'

// components
import PageEffect from './PageEffect';

const TransitionEffect = () => {
  
    const pathname = usePathname();
  
    return <>
    <AnimatePresence mode='wait'>
    <div key={pathname}>
    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
    {PageEffect}
    </div>
    </div>
    </AnimatePresence>
    </>
}

export default TransitionEffect