import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Dashboard from '../pages/dashboard/Dashboard'

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const DashboardContainer = connect(mapStateToProps, 
  mapDispatchToProps)(Dashboard)

export default DashboardContainer