import React from 'react'
import HeaderSt, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonStyle, { TomButton } from './style/ButtonStyle'



const Home = () => {
  return (
    <DivStyle>
    <HeaderSt>Styled Component</HeaderSt>
    <LinkS href="">Link</LinkS>
    <ButtonStyle saban>First Button</ButtonStyle>
    <ButtonStyle elif>Second Button</ButtonStyle>
    <ButtonStyle>Third Button</ButtonStyle>
    <TomButton>Forth Button</TomButton>
    <TomButton asiye>Fifth Button</TomButton>
    </DivStyle>
  )
}

export default Home