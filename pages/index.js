import { Component } from 'react'
import Head from 'next/head'
import Layout from '../modules/layout/Layout'

export default class extends Component {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return (
      <Layout userAgent={this.props.userAgent}>
        <h1>Hello World</h1>
      </Layout>
    )
  }
}
