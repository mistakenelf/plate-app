import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/modules/globalMenu'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LayoutContainer extends Component {
  render () {
    const { menuOpen, openMenu, closeMenu } = this.props
    return (
      <Layout menuOpen={menuOpen} openMenu={openMenu} closeMenu={closeMenu}>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = ({ globalMenu: { menuOpen } }) => {
  return {
    menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openMenu: actions.openMenu,
    closeMenu: actions.closeMenu
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
