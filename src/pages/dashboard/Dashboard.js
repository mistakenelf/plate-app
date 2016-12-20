import * as firebase from 'firebase'

import React, { Component, PropTypes } from 'react'

import AddPlateModal from '../../components/addPlateModal/AddPlateModal'
import { Grid } from 'semantic-ui-react'
import NoPlatesFound from '../../components/noPlatesFound/NoPlatesFound'
import Plate from '../../components/plate/Plate'
import { browserHistory } from 'react-router'

export default class extends Component {
  static propTypes = {
    plates: PropTypes.array,
    addPlate: PropTypes.func,
    removePlate: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (!firebaseUser) {
        browserHistory.push('/login')
      }
    })
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  confirmPlate = (e) => {
    e.preventDefault()

    const plateName = document.querySelector('#plateName').value
    const plateDescription = document.querySelector('#plateDescription').value

    this.setState({
      modalOpen: false
    })

    this.props.addPlate(plateName, plateDescription)
  }

  cancelPlate = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    const styles = {
      columnPadding: {
        paddingBottom: 10
      }
    }

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <AddPlateModal
              handleOpen={this.handleOpen}
              modalOpen={this.state.modalOpen}
              confirmPlate={this.confirmPlate}
              cancelPlate={this.cancelPlate}
            />
          </Grid.Column>
        </Grid.Row>
        {this.props.plates.length > 0
          ?
          <Grid.Row>
            {this.props.plates.map((plate, index) => {
              return (
                <Grid.Column
                  key={index}
                  computer={4}
                  largeScreen={4}
                  tablet={8}
                  mobile={16}
                  style={styles.columnPadding}
                >
                  <Plate
                    key={index}
                    plate={plate}
                    removePlate={this.props.removePlate}
                  />
                </Grid.Column>
              )
            })}
          </Grid.Row>
          :
          <Grid.Row centered>
            <Grid.Column
              textAlign='center'
              computer={4}
              largeScreen={4}
              tablet={8}
              mobile={16}
              >
              <NoPlatesFound />
            </Grid.Column>
          </Grid.Row>
        }
      </Grid>
    )
  }
}
