import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    box-sizing: border-box;
    user-select: none;
    font-family: 'Pacifico', cursive;
    background-color: #000;
  }
`

export default GlobalStyle