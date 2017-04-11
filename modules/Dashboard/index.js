import React, { Component } from 'react';

import AddPlateButton from './components/AddPlateButton';
import Loader from '../../components/Loader';
import NoPlatesFound from './components/NoPlatesFound';
import Plate from './components/Plate';
import { PlatesQuery } from './util/queries';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

class Dashboard extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    plates: PropTypes.array,
    addPlate: PropTypes.func
  };

  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    return (
      <div className="container-fluid" style={{ paddingTop: 5 }}>
        <div className="row">
          {this.props.plates.length === 0
            ? <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-lg-offset-4 col-md-offset-3"
              >
                <NoPlatesFound />
              </div>
            : this.props.plates.map((plate, index) => (
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
        <div className="row">
          <div style={{ bottom: 0 }} className="col-sm-12 end-lg">
            <AddPlateButton />
          </div>
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
