'use client';

import { useSwiper} from 'swiper/react'
import {PiCaretDoubleLeftBold, PiCaretDoubleRightBold} from 'react-icons/pi'

const SliderButtons = (containerStyles, buttonStyles, iconsStyles) => {
    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
    <button className={buttonStyles}>
        <PiCaretDoubleLeftBold/>
    </button>
    <button className={buttonStyles}>
        <PiCaretDoubleRightBold/>
    </button>
    
    </div>
  )
}

export default SliderButtons