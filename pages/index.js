import { Component } from 'react'
import Home from '../modules/home/Home'
import Layout from '../modules/layout/Layout'

export default class extends Component {
   render() {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}
