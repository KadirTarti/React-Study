import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Buton = () => {

  const naviGATE = useNavigate() //bu react-router-dom ' un hook'u


  return (
    <div className='text-center'>
    <Button className='btn btn-primary p-4 m-2'
    onClick={()=>naviGATE('/login')}
    >LOGIN</Button>
    <Button className='btn btn-secondary p-4 m-2'>KAPAT</Button>
    <Button className='btn btn-danger p-4 m-2'>SİL</Button>
    
    </div>
  )
}

export default Buton