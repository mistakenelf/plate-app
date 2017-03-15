import React, { Component, PropTypes } from "react";
import { compose, gql, graphql } from "react-apollo";

import DashboardMenu from "../components/DashboardMenu/DashboardMenu";
import Loader from "../components/Loader/Loader";
import Plate from "../components/Plate/Plate";

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    allPlates: PropTypes.array,
    addPlate: PropTypes.func,
    refetch: PropTypes.func,
    removePlate: PropTypes.func
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
    const { loading, refetch, allPlates, addPlate, removePlate } = this.props;

    if (loading) {
      return <Loader />;
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
              addPlate={addPlate}
              refetch={refetch}
            />
          </div>
        </div>
        <div className="row">
          {allPlates.map((plate, index) => {
            return (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                style={{ marginBottom: 10 }}
              >
                <Plate
                  plateId={plate.id}
                  name={plate.name}
                  description={plate.description}
                  removePlate={removePlate}
                  refetch={refetch}
                />
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
    allPlates {
      id
      name
      description
    }
  }
`;

const addPlateMutation = gql`
  mutation addPlate($name: String!, $description: String!) {
    addPlate(name: $name, description: $description) {
      name
      description
    }
  }
`;

const removePlateMutation = gql`
  mutation removePlate($id: ID!) {
    removePlate(id: $id) {
      id
    }
  }
`;

export default compose(
  graphql(Query, {
    props: ({ data: { loading, refetch, allPlates } }) => ({
      loading,
      allPlates,
      refetch
    })
  }),
  graphql(addPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description) =>
        mutate({ variables: { name, description } })
    })
  }),
  graphql(removePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => mutate({ variables: { id } })
    })
  })
)(DashboardContainer);
