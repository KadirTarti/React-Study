//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react'
// import Events from './1-events-hookintro/Events'
import "bootstrap/dist/css/bootstrap.min.css";
// import Hooks from './2-hooks/Hooks';
import Counter from './2-classComponents/Counter';

const App = () => {
  return (
    <div>

    {/* <Events/> */}
    {/* <Hooks/> */}
    <Counter/>
    <Counter count={20}/>
    
    
    
    </div>
  )
}

export default App

