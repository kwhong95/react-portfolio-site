import React from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/theme"
import GlobalStyle from "./assets/styles/global"
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-loading'
import PageList from './pages/PageList'
import Loader from './layouts/Loader';

const App = ({ history }) => {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router history={history}>
          <Switch loadingScreen={Loader}>
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
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)