import React, { Component, PropTypes } from 'react';

import { AllPlatesQuery } from './util/queries';
import DashboardMenu from './components/DashboardMenu';
import Loader from '../../components/Loader';
import NoPlatesFound from './components/NoPlatesFound';
import Plate from './components/Plate';
import { graphql } from 'react-apollo';

class Dashboard extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    allPlates: PropTypes.array,
    addPlate: PropTypes.func
  };

  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
            style={{ marginBottom: 10 }}
          >
            <DashboardMenu addPlate={this.props.addPlate} />
          </div>
        </div>
        <div className="row">
          {this.props.loading && <Loader />}
          {!this.props.loading && this.props.allPlates.length === 0
            ? <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-lg-offset-4 col-md-offset-3"
              >
                <NoPlatesFound />
              </div>
            : !this.props.loading &&
                this.props.allPlates.map((plate, index) => (
                  <div
                    key={index}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
                    style={{ marginBottom: 10 }}
                  >
                    <Plate
                      plateId={plate.id}
                      name={plate.name}
                      description={plate.description}
                      cardImage={plate.thumbnail}
                      completed={plate.completed}
                    />
                  </div>
                ))}

        </div>
      </div>
    );
  }
}

export default graphql(AllPlatesQuery, {
  props: ({ data: { loading, allPlates } }) => ({
    loading,
    allPlates
  }),
  options: {
    fetchPolicy: 'cache-and-network'
  }
})(Dashboard);
