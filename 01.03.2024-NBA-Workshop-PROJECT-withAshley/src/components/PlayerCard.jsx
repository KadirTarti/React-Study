import React from 'react'
import { Card } from 'react-bootstrap'

const PlayerCard = ({name, img, statistics}) => {
  
  return (
    <Card>
    <Card.Img variant='top' src={img}/>    
    </Card>
  )
}

export default PlayerCard