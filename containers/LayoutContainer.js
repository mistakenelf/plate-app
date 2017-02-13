import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { actions } from '../redux/modules/globalMenu'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LayoutContainer extends Component {
  constructor (props) {
    super(props)
    props.fetchRequests()
  }

  render () {
    const { open, openMenu, closeMenu } = this.props
    return (
      <Layout open={open} openMenu={openMenu} closeMenu={closeMenu}>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = ({ globalMenu: { open, requests } }) => {
  return {
    open,
    requests
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    openMenu: actions.openMenu,
    closeMenu: actions.closeMenu,
    fetchRequests: actions.fetchRequests
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)
