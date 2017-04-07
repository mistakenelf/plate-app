import React, { Component, PropTypes } from 'react';

import DashboardMenu from './components/DashboardMenu';
import Loader from '../../components/Loader';
import NoPlatesFound from './components/NoPlatesFound';
import Plate from './components/Plate';
import { PlatesQuery } from './util/queries';
import { graphql } from 'react-apollo';

class Dashboard extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    plates: PropTypes.array,
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
          {!this.props.loading && this.props.plates.length === 0
            ? <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-lg-offset-4 col-md-offset-3"
              >
                <NoPlatesFound />
              </div>
            : !this.props.loading &&
                this.props.plates.map((plate, index) => (
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

export default graphql(PlatesQuery, {
  props: ({ data: { loading, plates } }) => ({
    loading,
    plates
  }),
  options: {
    fetchPolicy: 'cache-and-network'
  }
})(Dashboard);
