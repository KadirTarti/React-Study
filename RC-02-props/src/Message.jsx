import React from 'react'

const Message = ({isim,telefon}) => {
    
    // const{isim, telefon}=props
  return (
    <div>
    {/* Buraya bir mesaj girdik. Bu mesaj sayfasını app.js'e import etseydik div halinde olan resim ve isimlerin arkasına ya da önüne gelecekti. Araya gelmesi için Message.jsx'i Person.jsx'e import ettik. */}
    
    <h4 style={{color:'red'}}>Merhaba ben {isim}ve benim telefon numaram {telefon}</h4>
    </div>
  )
}

export default Message