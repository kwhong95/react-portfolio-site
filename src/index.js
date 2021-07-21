import React from "react"
import ReactDOM from 'react-dom'
import {ThemeProvider} from "styled-components";
import { theme } from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/global";
import Layouts from './layouts';
import styled from 'styled-components';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layouts>
          <Section>
            section1
          </Section>
          <Section>
            section2
          </Section>
          <Section>
            section3
          </Section>
        </Layouts>
      </ThemeProvider>
    </React.StrictMode>
  )
}


const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)