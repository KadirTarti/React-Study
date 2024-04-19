import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data'

const CardDetails = () => {


  //   react-router-dom   useNavigate ile gönderme, useParams ile alma-çekme yapıyoruz
  const {nameee} = useParams()
  
  //tekrar br önceki sayfaya dönebilmek için (GO BACK) useNavigate kullanacağız... -1 ile bunu kolayca yapabiliyoruz
  const navigate = useNavigate()

  return (
    <div className='container text-center mt-4'>
    {data.map((i)=>i.name === nameee && (
    <div>
      <h3>{i.name}</h3>
    <img src={i.img} width={'200px'} alt="" />
    <h5>{i.text}</h5>
    <h6>{i.yorum}</h6>
    <div>
    <button className='btn btn-warning m-2'>Add This Course</button>
    <button className='btn btn-primary'>FAQ About Course</button>
    <br /> <br /> <br /> <br />
    <button className='btn btn-danger'
    onClick={()=>navigate(-1)}
    >GO BACK</button>
    <br />

<button className='btn btn-dark'
    onClick={()=>navigate('/')}
    >GO HOME</button>
    </div>
    </div>
    ))}
    </div>
  )
}

export default CardDetails