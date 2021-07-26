import styled, { keyframes } from 'styled-components'
import background from '../../assets/images/bg.png'


export const motionBg = keyframes`
 to { 
   background-image: url(${background});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center center;
 ;}
`

export const BackgroundImg = styled.figure.attrs(props => ({
  style: {
    clipPath: `circle(20% at 
    ${props.cursorX}px 
    ${props.cursorY}px)`,
  }
}))`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  cursor: none;
   
  animation-name: ${motionBg};
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`


export const Cursor = styled.span.attrs(props => ({
  style: {
    left: `${props.cursorX} px`,
    right: `${props.cursorY} px`
  }
}))`
  position: absolute;
  pointer-events: none;
  z-index: 1000;
`