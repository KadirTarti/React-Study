import React from 'react'

const Button = ({isActive, clicked}) => {



  return (
    <div>
    <button onClick={clicked}>Get User</button>
    </div>
  )
}

export default Button