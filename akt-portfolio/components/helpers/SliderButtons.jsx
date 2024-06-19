'use client';

import { useSwiper} from 'swiper/react'
import {PiCaretDoubleLeftBold, PiCaretDoubleRightBold} from 'react-icons/pi'
import { icons } from 'lucide-react';

const SliderButtons = (containerStyles, buttonStyles, iconsStyles) => {
    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
    <button className={buttonStyles}>
        <PiCaretDoubleLeftBold className={iconsStyles}/>
    </button>
    <button className={buttonStyles}>
        <PiCaretDoubleRightBold className={iconsStyles}/>
    </button>
    
    </div>
  )
}

export default SliderButtons