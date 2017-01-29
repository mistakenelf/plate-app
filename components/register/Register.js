import { inject, observer } from 'mobx-react'
import { Button, Form, Modal } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => (
  <div>
    <Modal
      open={store.modalOpen}
      onClose={store.closeModal}
      className='modal-style'
    >
      <Modal.Header>
        Register Now
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit' fluid>Register</Button>
        </Form>
      </Modal.Content>
    </Modal>

    <style jsx>{`
      .modal-style {
        width: 500px;
      }
    `}</style>
  </div>
)))
