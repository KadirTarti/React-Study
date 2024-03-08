import React, { useEffect, useState } from 'react'

const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([]);


  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setPeople(data));

  }, [])

  return (
    <div>
    {people.map((a)=>{
      return(
        <h1>
        {a.name}
      </h1>
      )
    })}
    </div>
  )
}

export default UseEffectAxiosFetch