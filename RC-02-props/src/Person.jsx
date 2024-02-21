import React from 'react'
import Message from './Message'

const Person = (props) => {
    // console.log(props);

    //* destruncting
    const {name,img,tel}= props
    return (
        <div>
    
    <h2>{name}</h2>

    <Message isim={name} telefon={tel}/>
    
    <img src={img} alt="" />

    <h4>{tel}</h4>
    
    </div>
  )
}

export default Person