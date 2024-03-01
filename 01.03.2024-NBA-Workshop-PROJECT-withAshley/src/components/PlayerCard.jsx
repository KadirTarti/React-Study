import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const PlayerCard = ({name, img, statistics}) => {

  const [showImage, setShowImage] = useState(true)
  
  return (
    <Card className='player-card m-auto'
    //üzerine tıklandığında onclick'i her zaman çalıştırması için card'a verdik
    onClick={()=>setShowImage(!showImage)}    
    
    >


    {showImage ? (<Card.Img className='player-img' 
      variant='top' 
      src={img}/> ) : (<ul className='m-auto'>
      {statistics.map((item, i)=>(
        <li key={i} className='h5 text-start list-unstyled'>
        {i===0 ? '🏀': i===1 ? '🔆' : i===2 ? '💁' : '🌠'}
        {item}</li>
      ))}
      </ul>)}
      
    
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>    
      
    </Card>
  )
}

export default PlayerCard