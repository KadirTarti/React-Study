import React from 'react'
// import {data} from '../helper/data'

const Card = ({player}) => {

    const {name, img, statistics}= player

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>

      <ul>
        {statistics.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card