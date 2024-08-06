import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainCard from '../components/MainCard'
import Categories from './Categories'

const Home = () => {
  return (
    <div>
    <Header/>
    Home
    <div className="App">
      {/* <Categories specUrl={specUrl} /> */}
    </div>
    <MainCard/>
    <Footer/>
    </div>
  )
}

export default Home