import React from 'react'
import { Container } from 'react-bootstrap'
import notFound from '../img/404-error-page-not-found-vector-plug-graphic-400-113178156.jpg'
import { useNavigate } from 'react-router-dom'



const NotFound = () => {

  let navigate = useNavigate()



  return (
    <Container className='text-center'>
    <img src={notFound} width={'600px'} className='rounded-3' alt="" />
    <div>    
    <button className='btn btn-danger mt-3' 
    onClick={()=>navigate('/')}>GO HOME</button>
    </div>
    
    </Container>
  )
}

export default NotFound