import React from 'react'
import { Carousel } from 'react-bootstrap'
import isa from '../img/isa.jpeg'
import devops from '../img/devops.jpeg'
import about from '../img/about.jpeg'

const Slider = () => {

  // !!!!!!!!!!!
  //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir değiş. slide={false} otomatik geçişi iptal et
  
  return (
    <Carousel fade variant='dark' interval={2000}>
      <Carousel.Item>
       <img src={isa} alt="" className='w-100' />
      </Carousel.Item>

      <Carousel.Item>
      <img src={devops} alt="" className='w-100' />
      </Carousel.Item>
      
      <Carousel.Item>
      <img src={about} alt="" className='w-100' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider