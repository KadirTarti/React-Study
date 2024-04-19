import React from 'react'
import { useKullaniciCntx } from '../context/KullaniciProvider'



const AnaUser = ({users}) => {

  const {changeWidth} = useKullaniciCntx()

    
  return (
    <div>
{users.map((i)=>{
    return(<div>

        <h3>{i.login} </h3>
        <img src={i.avatar_url} alt="" width={i.width}/>

        <div>
            <label htmlFor="">Image width(px)</label>
            <input type="number" 
            onChange={(e) => changeWidth(i.id, e.target.value)}
               
            />
        </div>

    </div>)
})}

    </div>
  )
}

export default AnaUser