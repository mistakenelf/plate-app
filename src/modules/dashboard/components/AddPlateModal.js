import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'
import React, { PropTypes } from 'react'

const propTypes = {
  handleOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
  confirmPlate: PropTypes.func,
  cancelPlate: PropTypes.func
}

function AddPlateModal({ handleOpen, modalOpen, confirmPlate, cancelPlate }) {
  return (
    <Modal
      trigger={<Button fluid color='grey' size='large' onClick={handleOpen}>GRAB A NEW PLATE</Button>}
      open={modalOpen}
      onClose={cancelPlate}
      size='small'
    >
      <Header icon='browser' content='Create a new plate' />
      <Modal.Content>
        <Form onSubmit={confirmPlate}>
          <Form.Field
            name='plateName'
            label='Name'
            control='input'
            type='text'
            id='plateName'
            placeholder='Give your plate a name'
            required
            />
          <Form.TextArea
            name='plateDescription'
            id='plateDescription'
            label='Description'
            placeholder='Leave a description of your new plate'
            required
            />
          <Button color='red' onClick={cancelPlate} inverted>
            <Icon name='remove' />Cancel
          </Button>
          <Button type='submit' color='green' inverted>
            <Icon name='checkmark' />Confirm
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

AddPlateModal.propTypes = propTypes

export default AddPlateModal
