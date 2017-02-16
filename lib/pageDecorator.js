import './tap_events'

import React, { PropTypes } from 'react'
import rootReducer, { client } from '../redux/rootReducer'

import { ApolloProvider } from 'react-apollo'
import MobileDetect from 'mobile-detect'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initStore } from '../redux/createStore'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      const md = new MobileDetect(req ? req.headers['user-agent'] : navigator.userAgent)

      const phone = md.phone() !== null
      const tablet = md.tablet() !== null

      // Setup redux store
      const store = initStore(rootReducer, {}, isServer)

      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return {
        ...pageProps,
        initialState: store.getState(),
        isServer,
        userAgent,
        phone,
        tablet
      }
    }

    static childContextTypes = {
      phone: PropTypes.bool,
      tablet: PropTypes.bool,
      breakpoints: PropTypes.arrayOf(PropTypes.number),
      containerWidths: PropTypes.arrayOf(PropTypes.number),
      gutterWidth: PropTypes.number
    }

    constructor (props) {
      super(props)
      this.store = initStore(rootReducer, props.initialState, props.isServer)
    }

    getChildContext = () => ({
      phone: this.props.phone,
      tablet: this.props.tablet,
      breakpoints: [768, 992, 1200],
      containerWidths: [750, 970, 1170],
      gutterWidth: 30
    })

    render () {
      return (
        <ApolloProvider client={client} store={this.store}>
          <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}>
            <Component {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
)
