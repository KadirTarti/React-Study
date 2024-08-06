import React, { useContext } from 'react'

import AnaUser from './AnaUser'
import { KullaniciContex } from '../context/KullaniciProvider'


const Isimler = () => {

  const {users} = useContext(KullaniciContex)

   
  return (
    <div>
        {/* diziden 4 kişinin ismini bastir */}
        {users.slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}

        <AnaUser />

    </div>
  )
}

export default Isimler