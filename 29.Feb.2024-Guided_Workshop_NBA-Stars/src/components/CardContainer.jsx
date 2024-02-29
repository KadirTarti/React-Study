import React from 'react'
import PlayerCard from './PlayerCard'
import {data} from '../helper/data'
import './cardcontainer.scss'

const CardContainer = () => {
  return (
    <div className='container mt-4 mb-4 d-flex flex-wrap'>
    {data.map((item)=> <PlayerCard{...item}/> )}
    
    
    </div>
  )
}

export default CardContainer