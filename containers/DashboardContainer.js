import React, { PropTypes } from "react";
import { gql, graphql } from "react-apollo";

import { Component } from "react";
import DashboardMenu from "../components/DashboardMenu/DashboardMenu";
import Plate from "../components/Plate/Plate";

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    plates: PropTypes.array
  };

  state = {
    newPlateDialogOpen: false,
    removePlatesDialogOpen: false
  };

  openNewPlateDialog = () => {
    this.setState({
      newPlateDialogOpen: true
    });
  };

  closeNewPlateDialog = () => {
    this.setState({
      newPlateDialogOpen: false
    });
  };

  openRemovePlatesDialog = () => {
    this.setState({
      removePlatesDialogOpen: true
    });
  };

  closeRemovePlatesDialog = () => {
    this.setState({
      removePlatesDialogOpen: false
    });
  };

  render() {
    const { loading, plates } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            style={{ marginBottom: 10 }}
          >
            <DashboardMenu
              newPlateDialogOpen={this.state.newPlateDialogOpen}
              openNewPlateDialog={this.openNewPlateDialog}
              closeNewPlateDialog={this.closeNewPlateDialog}
              removePlatesDialogOpen={this.state.removePlatesDialogOpen}
              openRemovePlatesDialog={this.openRemovePlatesDialog}
              closeRemovePlatesDialog={this.closeRemovePlatesDialog}
            />
          </div>
        </div>
        <div className="row">
          {plates.map((plate, index) => {
            return (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                style={{ marginBottom: 10 }}
              >
                <Plate name={plate.name} description={plate.description} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const Query = gql`
  query {
    plates {
      id
      name
      description
    }
  }
`;

export default graphql(Query, {
  props: ({ data: { loading, plates } }) => ({
    loading,
    plates
  })
})(DashboardContainer);
