import React from 'react'


import GosterUsers from './pages/GosterUsers'
import KullaniciProvider from './context/KullaniciProvider'

const App = () => {
  return (
    <KullaniciProvider>

      <GosterUsers/>
    </KullaniciProvider>
  )
}

export default App