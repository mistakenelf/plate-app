import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import React, { Fragment } from 'react'

import client from '../../apollo'
import Router from '../../router'
import theme from '../../lib/theme'

const GlobalStyle = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Router />
          </Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
