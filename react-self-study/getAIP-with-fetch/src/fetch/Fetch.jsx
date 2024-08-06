import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [photos, setPhotos] = useState([]);
    useEffect((  )=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) =>{return res.json()})
        .then((data) =>{setPhotos(data)});
    }, []);

  return (
    <div>
    {photos.map((photo)=>(
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
    ))}
    
    
    </div>
  )
}

export default Fetch