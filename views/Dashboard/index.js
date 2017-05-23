import React, { Component } from 'react'

import AddPlateButton from './components/AddPlateButton'
import { Animate } from 'react-move'
import Loader from '../../components/Loader/Loader'
import NoPlatesFound from './components/NoPlatesFound'
import Plate from './components/Plate'
import PlatesQuery from '../../queries/plates'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

class Dashboard extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    plates: PropTypes.array,
    addPlate: PropTypes.func,
    user: PropTypes.object
  }

  render() {
    if (this.props.loading) {
      return <Loader />
    }

    return (
      <div
        className="container"
        style={{ paddingLeft: '0.25rem', paddingRight: '0.25rem' }}
      >
        <div className="row row-margin">
          {this.props.plates.length === 0
            ? <div className="col-sm-12 col-md-6 col-lg-4 col-lg-offset-4 col-md-offset-3">
                <NoPlatesFound user={this.props.user} />
              </div>
            : this.props.plates.map((plate, index) => (
                <Animate
                  key={index}
                  easing="easeQuadIn"
                  default={{
                    scale: 0
                  }}
                  data={{
                    scale: 1
                  }}
                  duration={200}
                >
                  {data => (
                    <div
                      style={{
                        transform: `scale(${data.scale})`
                      }}
                      className="col-sm-12 col-md-6 col-lg-3"
                    >
                      <Plate
                        plateId={plate.id}
                        name={plate.name}
                        description={plate.description}
                        cardImage={plate.thumbnail}
                        status={plate.status}
                        content={plate.content}
                        user={this.props.user}
                      />
                    </div>
                  )}
                </Animate>
              ))}
        </div>
        <div className="row">
          <div className="col-sm-12 add-button">
            <AddPlateButton user={this.props.user} />
          </div>
        </div>
        <style jsx>{`
          .add-button {
            z-index: 200;
            position: fixed;
            bottom: 10px;
            right: 10px;
          }
          .plate-padding {
            margin-bottom: 10px;
          }
          .row-margin {
            margin-bottom: 70px;
          }
        `}</style>
      </div>
    )
  }
}

export default graphql(PlatesQuery, {
  props: ({ data: { loading, plates } }) => ({
    loading,
    plates
  }),
  options: props => ({
    variables: { username: props.user.username }
  })
})(Dashboard)
