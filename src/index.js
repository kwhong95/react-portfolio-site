import React from "react"
import ReactDOM from 'react-dom'
import {ThemeProvider} from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/global";
import Layouts from './layouts';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layouts>
          <h2>Hello React</h2>
        </Layouts>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)