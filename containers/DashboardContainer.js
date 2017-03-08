// @flow

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { Component } from 'react';
import DashboardMenu from '../components/DashboardMenu/DashboardMenu';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { actions } from '../store/modules/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type Props = {
  newPlateDialogOpen?: boolean,
  openNewPlateDialog?: Function,
  closeNewPlateDialog?: Function,
  removePlatesDialogOpen?: boolean,
  openRemovePlatesDialog?: Function,
  closeRemovePlatesDialog?: Function
};

class DashboardContainer extends Component {
  props: Props;

  render() {
    const {
      newPlateDialogOpen,
      openNewPlateDialog,
      closeNewPlateDialog,
      removePlatesDialogOpen,
      openRemovePlatesDialog,
      closeRemovePlatesDialog
    } = this.props;

    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            style={{ marginBottom: 10 }}
          >
            <DashboardMenu
              isNewPlateDialogOpen={newPlateDialogOpen}
              openNewPlateDialog={openNewPlateDialog}
              closeNewPlateDialog={closeNewPlateDialog}
              isRemovePlatesDialogOpen={removePlatesDialogOpen}
              openRemovePlatesDialog={openRemovePlatesDialog}
              closeRemovePlatesDialog={closeRemovePlatesDialog}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
            style={{ marginBottom: 10 }}
          >
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander
                showExpandableButton
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander
                showExpandableButton
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
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
    );
  }
}

const mapStateToProps = (
  { dashboard: { newPlateDialogOpen, removePlatesDialogOpen } }
) => {
  return {
    newPlateDialogOpen,
    removePlatesDialogOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openNewPlateDialog: actions.openNewPlateDialog,
      closeNewPlateDialog: actions.closeNewPlateDialog,
      openRemovePlatesDialog: actions.openRemovePlatesDialog,
      closeRemovePlatesDialog: actions.closeRemovePlatesDialog
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
