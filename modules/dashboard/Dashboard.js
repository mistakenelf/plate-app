import AddPlateModal from './components/AddPlateModal'
import { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NoPlatesFound from './components/NoPlatesFound'
import Plate from './components/Plate'
import { observer } from 'mobx-react'
import store from './store/store'

const Dashboard = observer(class Dashboard extends Component {
  handleOpen = () => {
    store.addPlateModalOpen = true
  }

  confirmPlate = (e) => {
    e.preventDefault()

    const plateName = document.querySelector('#plateName').value
    const plateDescription = document.querySelector('#plateDescription').value

    store.addPlateModalOpen = false

    this.addPlate(plateName, plateDescription)
  }

  addPlate = (plateName, plateDescription) => {
    const newPlate = {
      id: store.plateId++,
      plateName,
      plateDescription
    }

    store.plates.push(newPlate)
  }

  removePlate = (id) => {
    store.plates = store.plates.filter(plate => plate.id !== id)
  }

  cancelPlate = () => {
    store.addPlateModalOpen = false
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
              modalOpen={store.addPlateModalOpen}
              confirmPlate={this.confirmPlate}
              cancelPlate={this.cancelPlate}
            />
          </Grid.Column>
        </Grid.Row>
        {store.plates.length > 0
          ?
          <Grid.Row>
            {store.plates.map((plate, index) => {
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
})

export default Dashboard
