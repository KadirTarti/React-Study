import moment from 'moment';
import React, { useEffect, useState } from 'react'

const Clock = () => {
  // //?==================================================================
  // //?                       USEEFFECT HOOK
  // //?==================================================================
  // //! use Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
  // //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

  // //! useEffect(() => {
  // //*   /* ComponentDidMount code */
  // //! }, []);

  // //! useEffect(() => {
  // //*   */ componentDidUpdate code */
  // //! }, [var1, var2]);

  // //! useEffect(() => {

  // //!   return () => {
  // //*     //* componentWillUnmount code */
  // //!   };
  // //! }, []);

  // //! useEffect(() => {
  // //*   //* componentDidMount code + componentDidUpdate code */

  // //!   return () => {
  // //*     //* componentWillUnmount code */
  // //!   };
  // //! }, [var1, var2]);

  const[time,setTime]=useState(moment())
  const [sayac, setSayac] = useState(0);

  //!componentDidMount= ilk render da çalış bir daha burayı görme
  useEffect(() => {
    const zaman = setInterval(() => {
      console.log("merhaba");

      setTime(moment())
    }, 1000);

    
    //!component kapandığında yada başka sayfaya gidildiğinde çalışmamız dursun istersek alttaki return ü yazıyoruz
    //!componentWillUnmount()
    return () => {
      console.log("başka sayfaya gidildi");

      clearInterval(zaman);
    };
  }, []);


   //! sayac değişkeni her değiştiğinde olmasını istediğim extra olaylar için alttaki useEffect. componentDidUpdate
  useEffect(() => {
    sayac > 0 && alert('sayac arttırıldı')    // condition'u ekledik. çünkü sayac sayfa başlangıcında 0 değeri aldığı için yine alert veriyordu. bunu egale etmiş olduk.
  }, [sayac])
  

  return (
    <div className='text-danger fw-bold fs-5 '>
    {time.format('hh')}
    {time.format('ss') % 2 === 1 ? ':' : ' '}
    {time.format('mm')}
    {time.format('ss') % 2 ? ':' : ' '}
    {time.format('ss')}
      <div>
        <h2>****************************</h2>
        <h1>SAYAC: {sayac} </h1>
        <button className="btn btn-warning" onClick={() => setSayac(sayac + 1)}>
          ARTTIR
        </button>
      </div>
    </div>
  );
}

export default Clock