import React from "react"
import ReactDOM from 'react-dom'
import {ThemeProvider} from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/global";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h2>Hello React</h2>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)