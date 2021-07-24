import styled from 'styled-components'
import background from '../../assets/images/bg.png'

export const Wrap = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  opacity: .3;
  cursor: none;
  background-image: url(${background});
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(30%);
`

export const Cursor = styled.span`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 100px;
  transform: translate(-50%, -50%);
  backdrop-filter: sepia(20%);
  transform-origin: 100% 100%;
  transition: all 0.3s ease;
  pointer-events: none;
  transition-property: background, transform;
  border: 100px solid white;
  z-index: 1000;
  
  left: ${({cursorX}) => cursorX + 'px'};
  top: ${({cursorY}) => cursorY + 'px'};
`