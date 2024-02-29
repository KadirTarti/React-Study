import React from 'react'
import Card from './Card'
import {data} from '../helper/data'

const CardContainer = () => {
  return (
    <div className='container border border-danger'>
    {data.map((player, index) =>(
        <Card key={index} player={player}/>
    ))}

    {/* <Card/> */}
    
    </div>
  )
}

export default CardContainer