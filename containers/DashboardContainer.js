import React, { Component } from 'react'

import AddPlateButton from '../components/Dashboard/AddPlateButton'
import Loader from '../components/Loader/Loader'
import NoPlatesFound from '../components/Dashboard/NoPlatesFound'
import Plate from '../components/Dashboard/Plate'
import { PlatesQuery } from '../queries/dashboardQueries'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    plates: PropTypes.array,
    addPlate: PropTypes.func
  }

  render() {
    if (this.props.loading) {
      return <Loader />
    }

    return (
      <div
        className="container-fluid"
        style={{ paddingTop: 5, paddingLeft: '0.5em', paddingRight: '0.5em' }}
      >
        <div className="row" style={{ marginBottom: 70 }}>
          {this.props.plates.length === 0
            ? <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-lg-offset-4 col-md-offset-3">
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
                    status={plate.status}
                    content={plate.content}
                  />
                </div>
              ))}
        </div>
        <div className="row">
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              right: 0,
              padding: 10,
              zIndex: 200
            }}
            className="col-sm-12"
          >
            <AddPlateButton />
          </div>
        </div>
      </div>
    )
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
})(DashboardContainer)
