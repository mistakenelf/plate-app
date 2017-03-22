import React, { Component, PropTypes } from "react";
import { compose, gql, graphql } from "react-apollo";

import DashboardMenu from "../components/DashboardMenu";
import Loader from "../../../components/Loader/Loader";
import NoPlatesFound from "../components/NoPlatesFound";
import Plate from "../components/Plate";
import { actions } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    allPlates: PropTypes.array,
    addPlate: PropTypes.func,
    refetch: PropTypes.func,
    removePlate: PropTypes.func,
    searchText: PropTypes.string,
    doSearch: PropTypes.func,
    createPlateDialogOpen: PropTypes.bool,
    openCreatePlateDialog: PropTypes.func,
    closeCreatePlateDialog: PropTypes.func,
    removePlateDialogOpen: PropTypes.bool,
    openRemovePlateDialog: PropTypes.func,
    closeRemovePlateDialog: PropTypes.func
  };

  render() {
    const {
      loading,
      refetch,
      allPlates,
      addPlate,
      removePlate,
      searchText,
      doSearch,
      createPlateDialogOpen,
      openCreatePlateDialog,
      closeCreatePlateDialog,
      removePlateDialogOpen,
      openRemovePlateDialog,
      closeRemovePlateDialog
    } = this.props;

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
              addPlate={addPlate}
              refetch={refetch}
              searchText={searchText}
              doSearch={doSearch}
              createPlateDialogOpen={createPlateDialogOpen}
              openCreatePlateDialog={openCreatePlateDialog}
              closeCreatePlateDialog={closeCreatePlateDialog}
            />
          </div>
        </div>
        <div className="row">
          {allPlates.length === 0 &&
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-lg-offset-4 col-xl-offset-4 col-md-offset-3"
            >
              <NoPlatesFound />
            </div>}
          {searchText === "" &&
            allPlates.map((plate, index) => {
              return (
                <div
                  key={index}
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                  style={{ marginBottom: 10 }}
                >
                  <Plate
                    plateId={plate.id}
                    name={plate.name}
                    description={plate.description}
                    removePlate={removePlate}
                    refetch={refetch}
                    cardImage={plate.colorID}
                    removePlateDialogOpen={removePlateDialogOpen}
                    openRemovePlateDialog={openRemovePlateDialog}
                    closeRemovePlateDialog={closeRemovePlateDialog}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  {
    dashboard: {
      searchText,
      createPlateDialogOpen,
      removePlateDialogOpen
    }
  }
) => {
  return {
    searchText,
    createPlateDialogOpen,
    removePlateDialogOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      doSearch: actions.doSearch,
      openCreatePlateDialog: actions.openCreatePlateDialog,
      closeCreatePlateDialog: actions.closeCreatePlateDialog,
      openRemovePlateDialog: actions.openRemovePlateDialog,
      closeRemovePlateDialog: actions.closeRemovePlateDialog
    },
    dispatch
  );
};

const AllPlatesQuery = gql`
  query {
    allPlates {
      id
      name
      description
      colorID
    }
  }
`;

const PlatesByNameQuery = gql`
  query allPlatesByName($name: String!) {
    platesByName(name: $name) {
      id
      name
      description
      colorID
    }
  }
`;

const addPlateMutation = gql`
  mutation addPlate($name: String!, $description: String!, $colorID: String!) {
    addPlate(name: $name, description: $description, colorID: $colorID) {
      name
      description
      colorID
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
  connect(mapStateToProps, mapDispatchToProps),
  graphql(AllPlatesQuery, {
    props: ({ data: { loading, refetch, allPlates } }) => ({
      loading,
      allPlates,
      refetch
    })
  }),
  graphql(PlatesByNameQuery, {
    options: {
      variables: { name: "Alex" }
    },
    props: ({ data: { loading, refetch, platesByName } }) => ({
      plateByNameLoading: loading,
      platesByName,
      refetchByName: refetch
    })
  }),
  graphql(addPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description, colorID) =>
        mutate({ variables: { name, description, colorID } })
    })
  }),
  graphql(removePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => mutate({ variables: { id } })
    })
  })
)(DashboardContainer);
