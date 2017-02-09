import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/modules/layout'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LayoutContainer extends Component {
  render () {
    const { open, openMenu, closeMenu } = this.props

    return (
      <Layout open={open} openMenu={openMenu} closeMenu={closeMenu}>
        {this.props.children}
      </Layout>
    )
  }
}

function mapStateToProps ({ layout: { open } }) {
  return {
    open: open
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return bindActionCreators({
    openMenu: actions.openMenu,
    closeMenu: actions.closeMenu
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)
