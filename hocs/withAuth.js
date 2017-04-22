import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

let auth = { loggedIn: false }

export default ComposedComponent => {
  return class WithAuth extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      auth: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
      if (!process.browser) {
        auth.token = ctx.req.cookies.token
        auth.loggedIn = Boolean(auth.token)
      }

      return {
        serverRendered: !process.browser,
        auth,
        ...(await loadGetInitialProps(ComposedComponent, ctx))
      }
    }

    componentDidMount() {
      if (this.props.serverRendered) {
        auth = this.props.auth
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
}
