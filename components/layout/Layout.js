import { Component } from 'react'
import Head from 'next/head'
import Navigation from '../Navigation/Navigation'
import { Provider } from 'mobx-react'
import { auth } from '../../lib/db'
import store from '../../store/store'

export default class extends Component {

  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        store.doLogin
      } else {
        store.doLogout
      }
    })
    console.log(store.loggedIn)
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <style jsx global>{`
            * {
              margin: 0;
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding-top: 30px;
              font-family: Roboto, sans-serif;
              background-color: white;
            }
          `}</style>
          <Head>
            <meta charset='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
            <meta name='theme-color' content='#00B5AD' />
            <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
            <link rel='shortcut icon' href='/static/plateLogo.png' />
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
            <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet' />
          </Head>
          <Navigation />
          {this.props.children}
        </div>
      </Provider>
    )
  }
}
