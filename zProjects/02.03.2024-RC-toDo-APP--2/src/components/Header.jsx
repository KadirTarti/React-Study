import React from 'react'
import logo from '../assets/todo-logo.jpg'

const Header = () => {
  return (
    <div className='container header mb-4'>
    <img className='mt-4' src={logo} width='20%' alt="" />
    </div>
  )
}

export default Header