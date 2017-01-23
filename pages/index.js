import '../components/tap_events'

import { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from '../components/navigation/Navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class extends Component {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent: this.props.userAgent})}>
        <Layout>
          <h1>Hello World</h1>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
