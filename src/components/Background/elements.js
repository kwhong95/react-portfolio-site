import styled from 'styled-components'
import background from '../../assets/images/bg.png'

export const BackgroundImg = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  opacity: .7;
  cursor: none;
  background-image: url(${background});
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(60%);
  
  clip-path: circle(20% at 
  ${({cursorX}) => cursorX + 'px'} ${({cursorY}) => cursorY +'px'});
`

export const Cursor = styled.span`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;
  transition-property: background, transform;
  z-index: 1000;
  
  left: ${({cursorX}) => cursorX + 'px'};
  top: ${({cursorY}) => cursorY + 'px'};
`