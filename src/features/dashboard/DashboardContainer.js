import * as actions from './actions'

import Dashboard from './Dashboard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    plates: state.plates
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const DashboardContainer = connect(mapStateToProps,
  mapDispatchToProps)(Dashboard)

export default DashboardContainer
