import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/modules/drawer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LayoutContainer extends Component {
  render () {
    const { open, openDrawer, closeDrawer } = this.props
    return (
      <Layout open={open} openDrawer={openDrawer} closeDrawer={closeDrawer}>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = ({ drawer: { open } }) => {
  return {
    open
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openDrawer: actions.openDrawer,
    closeDrawer: actions.closeDrawer
  }, dispatch)
}

const MyQuery = gql`query { hello }`

const ContainerWithData = graphql(MyQuery, {
  props: ({ data: { hello } }) => ({
    hello
  })
})(LayoutContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData)
