import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import codingSvg from "../../assets/coding.svg"

const About = () => {
  return (
    <div>

      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>AKT </span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am Abdulkadir TARTILACI</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL.
          </h4>
          <h2>
            <p>Send me a message by : 
            <a href="https://www.github.com/KadirTarti">GitHub</a></p>
          </h2>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
}

export default About