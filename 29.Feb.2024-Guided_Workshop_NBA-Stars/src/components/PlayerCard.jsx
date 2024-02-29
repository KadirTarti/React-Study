import React, { useState } from 'react'
import './playercard.scss';


const PlayerCard = (props) => {
  
  const {name, img, statistics} = props

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = ()=>{
      setIsFlipped(!isFlipped);
    }

  
  return (
    <div className='player-card mt-4'>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img-top" src={img} alt="Player" />
              <div className="card-body">
              <h5>{name}</h5>
              </div>
          </div>
        <div className="card-back">
          <ul className='d-flex justify-content-center align-items-center'>{statistics}</ul>
        </div>
        </div>
      </div>    
        </div>
  )
}

export default PlayerCard