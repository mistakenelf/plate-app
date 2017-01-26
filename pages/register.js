import { Component } from 'react'
import Layout from '../components/layout/Layout'
import Register from '../modules/register/Register'

export default class extends Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render () {
    return (
      <Layout userAgent={this.props.userAgent}>
        <Register />
      </Layout>
    )
  }
}
