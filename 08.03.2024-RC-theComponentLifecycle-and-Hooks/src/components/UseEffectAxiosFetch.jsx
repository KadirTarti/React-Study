import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([]);

//!  api çekmek için  1.yol fetch then yapısı (chain)
  // useEffect (()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>res.json())
  //   .then((data)=>setPeople(data));

  // }, [])



  //!  api çekmek için  2.yol fetch async await yapısı

  // const getData=async()=>{

  //   const res2 = await fetch ('https://jsonplaceholder.typicode.com/users');
  //   const data2 = await res2.json()
    
  //   setPeople(data2)
  // }

  // useEffect(() => {
        
  //   getData()
    
  // }, [])
  
  //! 3. yol   axios then (chain)
  // useEffect(()=>{
  //   axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then((veri)=> setPeople(veri.data));
  // }, [])

  // dizi datanın içinde olduğu için veri.data yapmak zorunda idik




  //! 4. yol   axios async await

  const getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    
setPeople(res.data)
    
  };
  useEffect(() => {
    getData();

  }, []);




  //&  örnek - bunu bastırmaya çalış       https://randomuser.me/api
//   const getData = async () => {
//     const res = await axios("https://randomuser.me/api");
    
// setPeople(res.data.results)
    
//   };
//   useEffect(() => {
//     getData();

//   }, []);
//^return altını da buraadaki veirlere göre düzenle.. örn a.name, a.state vs..



  return (
    <div className="container text-center mt-4">
    <div className='row'>
    {people.map(({name, username, id, phone})=>{
      return(
        <div key={id} className='col-12 col-sm-6 col-md-4'>
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt="" />
        <h5>
        {name}
      </h5>
      <h6> {username} </h6>
      <h6> {phone} </h6>
      </div>
      )
    })}
    </div>
    </div>
  )
}

export default UseEffectAxiosFetch