import React from 'react'

const Button = ({activeUser, onClickHandler}) => {



  return (
    <div>
    <button onClick={onClickHandler}>{activeUser ? "Get Another User" : 'Get User'} </button>
    </div>
  )
}

export default Button