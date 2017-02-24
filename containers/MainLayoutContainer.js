import { Component } from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import { actions } from '../store/modules/drawer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class MainLayoutContainer extends Component {
  render () {
    const { open, openDrawer, closeDrawer } = this.props
    return (
      <MainLayout open={open} openDrawer={openDrawer} closeDrawer={closeDrawer}>
        {this.props.children}
      </MainLayout>
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

const MyQuery = gql`query Plate {
  plate {
    name,
    description
  }
}`

const ContainerWithData = graphql(MyQuery, {
  props: ({ data: { name, description } }) => ({
    name
  })
})(MainLayoutContainer)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData)
