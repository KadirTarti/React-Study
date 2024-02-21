//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.



import React from 'react';
//^* app.js'te bu import olduğu için buradan silebiliriz

//! src altındaki img dosyasından resim ekleme yöntemi :
import resim2 from "../img/download.jpg"

//external css için bağlamayı burada yapmamız gerekli
import "./Msg.css"
import Clock from '../clock/Clock';



const Msg = () => {
    //! burası javascript alanı, return altı ise react (jsx) alanı


    //internal css    
    const styleA = {
      color: "green",
      fontFamily: "Tahoma",
      fontSize: "2rem"
    }



    const styleImg={
      border: "5px solid darkBlue",
      opacity: "0.6",
    }



//retun altına yazılanlar ekrana basılacaklar alanı. fonksiyon, onclik vs yazmak istersek onlar return öncesinde yazılmalı! 
    return (   
    <div>
    
    <h2 style={styleA}>Burası Msg sayfasıdır!</h2>

    {/* burada inline css var. onun için 2 kez süslü açmak gerekiyor */}
    <p style={{color:"brown"}}>Hallo REACT</p>  

    <Clock/>

    {/* netten alınan resim: */}
    <img className="img" style={styleImg} src="https://www.shutterstock.com/image-photo/european-badger-walking-towards-camera-260nw-1951199344.jpg" width='200px' alt="" />

    <Clock/>
    <img className="img" src={resim2} alt="" />


    <Clock/>
    {/* public klasörüne eklenen resimler alttaki gibi yazılabilir */}
    <img className="img" style={styleImg} src="../assets/resim.png" width='200px' alt="" />
    </div>
  );
};

export default Msg;