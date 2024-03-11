import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BilgiList from '../components/BilgiList';

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


  return (
    <>
      <BilgiList tutorials={tutorials}/>
    </>
  )
}

export default Home