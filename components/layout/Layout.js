import '../../config/tap_events'

import { Component } from 'react'
import Head from 'next/head'
import Modal from '../modal/Modal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from '../../modules/navigation/Navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { observer } from 'mobx-react'
import store from '../../store/store'

export default observer(({ children, userAgent }) => (
  <MuiThemeProvider muiTheme={getMuiTheme({
    userAgent: userAgent,
    appBar: {
      textColor: 'black',
    }
  }
  )}>
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
          background-color: 'white';
        }
      `}</style>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#00B5AD" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="shortcut icon" href="/static/plateLogo.png" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      </Head>
      <Modal open={store.modalOpen} closeModal={store.closeModal} />
      <Navigation store={store} />
      {children}
    </div>
  </MuiThemeProvider>
))
