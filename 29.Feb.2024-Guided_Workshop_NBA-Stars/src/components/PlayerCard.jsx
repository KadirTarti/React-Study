import React, { useState } from 'react'
import './playercard.scss';


const PlayerCard = ({name, img, statistics}) => {
  
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
          <ul className='list-group list-group-flush align-items-start'>
            <li className='list-group-item'>🏀{statistics[0]}</li>
            <li className='list-group-item'>🏀{statistics[1]}</li>
            <li className='list-group-item'>🏀{statistics[2]}</li>
            <li className='list-group-item'>🏀{statistics[3]}</li>
          </ul>
          <h5 className='list-name mt-4'>{name}</h5>
        </div>
        </div>
      </div>    
        </div>
  )
}

export default PlayerCard