import { Component } from 'react'
import Dashboard from '../modules/dashboard/Dashboard'
import Layout from '../modules/layout/Layout'
import { Provider } from 'mobx-react'
import { initStore } from '../store'

export default class dashboard extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return {
      plates: store.plates,
      plateId: store.plateId ,
      addPlateModalOpen: store.addPlateModalOpen,
      washPlateModalOpen: store.washPlateModalOpen
    }
  }

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer, props.plates, props.plateId, props.addPlateModalOpen, props.washPlateModalOpen)
  }

  render() {
    return (
      <Provider style={this.store}>
        <Layout>
          <Dashboard />
        </Layout>
      </Provider>
    )
  }
}
