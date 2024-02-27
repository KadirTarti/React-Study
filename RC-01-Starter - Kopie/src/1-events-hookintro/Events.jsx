

const Events = () => {

    // js alani

    let baslik ="merhaba";
    let count = 0;

     const arttir = () => {
        count=count+1
        console.log(count);
        document.querySelector("span").textContent=count
     }

//? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)

     const changeTitle = (a) => {
        baslik=a
        console.log(a);
        document.querySelector("h1").textContent=a
         }
  return (
    // jsx alani
    <div className="container text-center mt-4">
    <h1> INFO : {baslik} </h1>    

    <h2>  Count: <span className="text-success">{count}</span> </h2>

    //! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor


    <button onClick={arttir} className='btn btn-primary'>ARTTIR</button>
    <button onClick={()=>changeTitle("naber")} className='btn btn-danger'>BASLIK DEGISTIR</button>
    <button className='btn btn-warning'>TIKLANDI</button>
    //?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

    </div>
  )
}

export default Events