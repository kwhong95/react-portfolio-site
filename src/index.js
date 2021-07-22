import React from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/theme"
import GlobalStyle from "./assets/styles/global"
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageList from './pages/PageList'

const App = () => {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AnimatePresence>
            <Switch>
              {PageList.map((page, idx) => (
                <Route
                  key={idx}
                  exact={page.exact}
                  path={page.path}
                  render={props => (
                    <page.layout history={props.history}>
                      <page.component {...props} />
                    </page.layout>
                  )}
                />
              ))}
            </Switch>
          </AnimatePresence>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)