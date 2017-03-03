import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

import { Component } from 'react'
import DashboardMenu from '../components/DashboardMenu/DashboardMenu'
import FlatButton from 'material-ui/FlatButton'
import { actions } from '../store/modules/dashboard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class DashboardContainer extends Component {
  render () {
    const { newPlateDialogOpen, openDialog, closeDialog } = this.props
    return (
      <div className='container-fluid' style={{ paddingTop: 5 }}>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' style={{ marginBottom: 10 }}>
            <DashboardMenu
              open={newPlateDialogOpen}
              openDialog={openDialog}
              closeDialog={closeDialog}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4' style={{ marginBottom: 10 }}>
            <Card>
              <CardHeader
                title='Without Avatar'
                subtitle='Subtitle'
                actAsExpander
                showExpandableButton
              />
              <CardActions>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </CardActions>
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            </Card>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
            <Card>
              <CardHeader
                title='Without Avatar'
                subtitle='Subtitle'
                actAsExpander
                showExpandableButton
              />
              <CardActions>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </CardActions>
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ dashboard: { newPlateDialogOpen } }) => {
  return {
    newPlateDialogOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openDialog: actions.openDialog,
    closeDialog: actions.closeDialog
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
