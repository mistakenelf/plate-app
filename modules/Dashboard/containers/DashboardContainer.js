import { AllPlatesQuery, PlatesByNameQuery } from "../utils/queries";
import React, { Component, PropTypes } from "react";
import {
  addPlateMutation,
  completePlateMutation,
  removePlateMutation,
} from "../utils/mutations";
import { compose, graphql } from "react-apollo";

import Animation from "../../../components/Animation/Animation";
import DashboardMenu from "../components/DashboardMenu";
import Loader from "../../../components/Loader/Loader";
import NoPlatesFound from "../components/NoPlatesFound";
import Plate from "../components/Plate";
import { actions } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    const plates = this.props.allPlates.map((plate, index) => (
      <div
        key={index}
        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
        style={{ marginBottom: 10 }}
      >
        <Animation>
          <Plate
            plateId={plate.id}
            name={plate.name}
            description={plate.description}
            removePlate={this.props.removePlate}
            cardImage={plate.thumbnail}
            completed={plate.completed}
            completePlate={this.props.completePlate}
          />
        </Animation>
      </div>
    ));

    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            style={{ marginBottom: 10 }}
          >
            <DashboardMenu
              addPlate={this.props.addPlate}
              searchText={this.props.searchText}
              doSearch={this.props.doSearch}
              createPlateDialogOpen={this.props.createPlateDialogOpen}
              openCreatePlateDialog={this.props.openCreatePlateDialog}
              closeCreatePlateDialog={this.props.closeCreatePlateDialog}
            />
          </div>
        </div>
        <div className="row">
          {this.props.allPlates.length === 0 &&
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-lg-offset-4 col-xl-offset-4 col-md-offset-3"
            >
              <NoPlatesFound />
            </div>}
          {this.props.searchText === "" && plates}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  {
    dashboard: {
      searchText,
      createPlateDialogOpen
    }
  }
) => {
  return {
    searchText,
    createPlateDialogOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      doSearch: actions.doSearch,
      openCreatePlateDialog: actions.openCreatePlateDialog,
      closeCreatePlateDialog: actions.closeCreatePlateDialog
    },
    dispatch
  );
};

DashboardContainer.propTypes = {
  loading: PropTypes.bool,
  allPlates: PropTypes.array,
  addPlate: PropTypes.func,
  removePlate: PropTypes.func,
  searchText: PropTypes.string,
  doSearch: PropTypes.func,
  createPlateDialogOpen: PropTypes.bool,
  openCreatePlateDialog: PropTypes.func,
  closeCreatePlateDialog: PropTypes.func,
  completePlate: PropTypes.func
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(AllPlatesQuery, {
    props: ({ data: { loading, allPlates } }) => ({
      loading,
      allPlates
    }),
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  graphql(PlatesByNameQuery, {
    options: {
      variables: { name: "Alex" }
    },
    props: ({ data: { loading, platesByName } }) => ({
      plateByNameLoading: loading,
      platesByName
    })
  }),
  graphql(addPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description, thumbnail) =>
        mutate({ variables: { name, description, thumbnail } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  }),
  graphql(removePlateMutation, {
    props: ({ mutate }) => ({
      removePlate: id => mutate({ variables: { id } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  }),
  graphql(completePlateMutation, {
    props: ({ mutate }) => ({
      completePlate: (id, completed) => mutate({ variables: { id, completed } })
    }),
    options: {
      refetchQueries: [
        {
          query: AllPlatesQuery
        }
      ]
    }
  })
)(DashboardContainer);
