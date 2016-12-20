import * as firebase from 'firebase'

import React, { Component } from 'react'

import AddPlateModal from './components/addPlateModal/AddPlateModal'
import { Grid } from 'semantic-ui-react'
import NoPlatesFound from './components/noPlatesFound/NoPlatesFound'
import Plate from './components/plate/Plate'
import { browserHistory } from 'react-router'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      plates: [],
      plateId: 0
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

    this.addPlate(plateName, plateDescription)
  }

  addPlate = (plateName, plateDescription) => {
    const newPlate = {
      id: this.state.plateId++,
      plateName,
      plateDescription
    }

    this.state.plates.push(newPlate)
  }

  removePlate = (id) => {
    this.setState({
      plates: this.state.plates.filter(plate => plate.id !== id)
    })
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
        {this.state.plates.length > 0
          ?
          <Grid.Row>
            {this.state.plates.map((plate, index) => {
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
                    removePlate={this.removePlate}
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
