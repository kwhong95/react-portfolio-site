import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    box-sizing: border-box;
    user-select: none;
    font-family: 'Pacifico', cursive;
    background-color: #151515;
  }
`

export default GlobalStyle