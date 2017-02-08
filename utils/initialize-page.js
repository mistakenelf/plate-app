import { Component } from 'react'
import { Provider } from 'mobx-react'
import getAuthStore from '../stores/auth-store'
import initGlobalStore from '../stores/global-store'

export default function initializePage (Page) {
  return class PageComponent extends Component {
    static getInitialProps ({ req }) {
      const isServer = !!req
      initGlobalStore(isServer)
      return { isServer }
    }

    constructor (props) {
      super(props)
      this.globalStore = initGlobalStore(props.isServer)
      this.authStore = getAuthStore()
    }

    render () {
      return (
        <Provider GlobalStore={this.globalStore} AuthStore={this.authStore}>
          <div>
            <style jsx global>{`
              * {
                margin: 0;
                box-sizing: border-box;
              }
              body {
                margin: 0;
                padding-top: 40px;
                font-family: Roboto, sans-serif;
                background-color: white;
              }
            `}</style>
            <Page />
          </div>
        </Provider>
      )
    }
  }
}
