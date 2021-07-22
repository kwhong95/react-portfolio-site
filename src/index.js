import React from "react"
import ReactDOM from 'react-dom'
import {ThemeProvider} from "styled-components"
import { theme } from "./assets/styles/theme"
import GlobalStyle from "./assets/styles/global"
import Layouts from './layouts'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Layouts>
              <Route path='/' >
                <Redirect to='/home' />
                  <Route path='/home'>
                    <Section>
                      section1
                    </Section>
                    <Section>
                      section2
                    </Section>
                    <Section>
                      section3
                    </Section>
                  </Route>
                  <Route path='/about'>
                    <Section>
                      AboutPage
                    </Section>
                  </Route>
                  <Route path='/project'>
                    <Section>
                      ProjectPage
                    </Section>
                  </Route>
                  <Route path='/contact'>
                    <Section>
                      ContactPage
                    </Section>
                  </Route>
              </Route>
            </Layouts>
          </Switch>
        </Router>
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