import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BilgiList from '../components/BilgiList';
import AddBilgi from '../components/AddBilgi';

const Home = () => {

  const [tutorials, setTutorials] = useState([]);




  //* database adresi best practice olarak sadece burada olur. ve URL olarak tanımlanır
  const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (read işlemi -> verileri okuma)
  const getTutorials =async()=>{
   const veri= await axios.get(URL)
  //  console.log(veri.data);
   //axios la veirler genelde ekstra data içinde geliyor. o nedenle veri.data gibi .data ile çekmemiz gerekiyor
   setTutorials(veri.data) //url'deki veriyi ele geçirdik. tutorials'de
  }


   //!then zinciriyle de yazabiliriz... üstte fonksiyona eşitleyip axios ve useEffect ayrı ayrı yaptık. burada birleşik yapılıyor:
  // useEffect(()=>{
  // axios.get(url).then((res) => setTutorials(res.data))},[])}


  useEffect(()=>{
    getTutorials()
  }, [])
  // burada fonksiyonu useEffect siz yazsak sonsuz döngü oluşurdu. Bunu kırmak için useEffect kullanılıyor.



  //* gönderme - silme vs olayları HOME'da yapılır!!!
  //! POST (create işlemi yapıyoruz... database'e veri gönderme)
  const postalaTutorial = async(yeniVeri)=> {
    await axios.post(URL, yeniVeri)

//tekrar verilerin güncel halini çekip diziye atmış olduk ve ekran güncellendi
    getTutorials()
  }


  //! DELETE (database'den silme)

  const deleteTutorial = async (id)=>{
    await axios.delete(`${URL}${id}/`)
    getTutorials()
  }


  return (
    <>
      <AddBilgi postalaTutorial={postalaTutorial}/>
      <BilgiList tutorials={tutorials} deleteTutorial={deleteTutorial}/>
    </>
  )
}

export default Home