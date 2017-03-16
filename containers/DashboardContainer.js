import React, { Component, PropTypes } from "react";
import { compose, gql, graphql } from "react-apollo";

import DashboardView from "../components/Dashboard/DashboardView";
import Loader from "../components/Loader/Loader";

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    allPlates: PropTypes.array,
    addPlate: PropTypes.func,
    refetch: PropTypes.func,
    removePlate: PropTypes.func
  };

  render() {
    const { loading, refetch, allPlates, addPlate, removePlate } = this.props;

    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <DashboardView
          addPlate={addPlate}
          allPlates={allPlates}
          removePlate={removePlate}
          refetch={refetch}
        />
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
