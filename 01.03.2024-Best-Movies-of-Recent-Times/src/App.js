//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import CardContainer from './components/CardContainer'

const App = () => {
  return (
    <Container className='text-center mt-4'>
    
    
    <Header/>
    <CardContainer/>
    
    
    </Container>
  )
}

export default App

