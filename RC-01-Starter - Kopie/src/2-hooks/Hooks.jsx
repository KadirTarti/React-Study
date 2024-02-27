//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react"


const Hooks = () => {
//! useState hook'u her zaman en üste yazılmalı

const [sayac, setSayac]= useState (0)
//let sayac = 0;

//&vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

const [kisi, setKisi] = useState({
    isim:'saban',
    meslek: 'developer',
    yas: 50,
    renk: 'red',
})

//! object'linin 1.yolu
// const handleSwap =()=>{
//     if(kisi.isim=='saban') 
//         {setKisi({
//             isim:'emre',
//             meslek: 'devops',
//             yas: 33,
//             renk: 'lightBlue',
//         })}
//     else {
//         setKisi({
//             isim:'saban',
//             meslek: 'developer',
//             yas: 50,
//             renk: 'red',
//         })
//     }
// }


//! object'linin 2.yolu

const [toggle, setToggle] = useState(true) 

const handleSwap=()=>{
    setToggle(!toggle)
    if(toggle){
        setKisi({
            isim:'saban',
            meslek: 'developer',
            yas: 50,
            renk: 'red',
        })        
    } else{
        setKisi({
            isim:'emre',
            meslek: 'devops',
            yas: 33,
            renk: 'lightBlue',
        })
    }
}



const arttir =()=>{
    // sayac+=1
    setSayac(sayac+1) // sayac = sayac+1
}



//&iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
 const isimChange=()=>{
    setKisi({...kisi,
        isim:'huseyin', renk:'green'
    })    
 }



  return (
    <div className='container text-center'>
    <h2>****************************************************</h2>
    <h2>********************************</h2>
    <h1 className='text-danger'>useState</h1>
    <h2>Count: {sayac}</h2>
    <button onClick={arttir} className='btn btn-success'>ARTTIR</button>
    


    {/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
    <h1>******************************************</h1>
    <h1>Object ile useState kullanımı</h1>
    <h2 className='text-danger'>{kisi.isim}</h2>
    <h2 className='text-success'>{kisi.meslek}</h2>
    <h2 className='text-primary'>{kisi.yas}</h2>

    <button onClick={handleSwap} style={{backgroundColor:kisi.renk, fontSize:'25px'}} className='btn m-4 p-4'>TOOGLE olarak değiştir</button>

    
    {/* iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */}
    <button onClick={isimChange} style={{backgroundColor: 'lightCoral', fontSize:'20px'}} className='btn m-4 p-4'>İsim Değiştir</button>



    <button onClick={()=>setKisi({...kisi,yas:22})} style={{backgroundColor: 'lightCoral', fontSize:'20px'}} className='btn m-4 p-4'>YAŞ Değiştir</button>





    </div>



  )
}

export default Hooks