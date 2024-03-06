import HastaEkle from '../components/HastaEkle'
import HastaListe from '../components/HastaListe'
import Data from '../helper/Data'
import { useState } from 'react'

const Home = () => {

  const [patientCard, setPatientCard] =useState(JSON.parse(localStorage.getItem('gorevler')) || Data)

  return (
    <div className='container'>
    <HastaEkle patientCard={patientCard} setPatientCard={setPatientCard}/>
    <HastaListe patientCard={patientCard} setPatientCard={setPatientCard}/>

    </div>
  )
}

export default Home
