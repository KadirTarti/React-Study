import React from 'react'
import './playercard.scss';


const PlayerCard = (props) => {
  
  const {name, img, statistics} = props
  return (
    <div className='mt-4'>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
        <h5>{name}</h5>
        </div>
      </div>    
    
    </div>
  )
}

export default PlayerCard