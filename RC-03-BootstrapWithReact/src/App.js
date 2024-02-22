import './App.css';

import React from 'react'

//! bootstrap yolunu import etmezsek çalışmaz. buraya veya index.js ye import edilebilir.
import "bootstrap/dist/css/bootstrap.min.css"

import dataInfos from './data'

import Coursecard from './components/Coursecard';
import MyNavbar from './components/MyNavbar'
import Slider from './components/Slider'


const App = () => {
  console.log(dataInfos);
  return (
    <div>
    <MyNavbar/>
    <Slider/>
    <Coursecard veri = {dataInfos}/>  
    </div>
  )
}

export default App

