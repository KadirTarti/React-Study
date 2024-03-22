import React from 'react'
import HeaderSt, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'



const Home = () => {
  return (
    <DivStyle>
    <HeaderSt>Styled Component</HeaderSt>
    <LinkS href="">Link</LinkS>
    <button>First Button</button>
    <button>Second Button</button>
    <button>Third Button</button>
    <button>Forth Button</button>
    <button>Fifth Button</button>
    </DivStyle>
  )
}

export default Home