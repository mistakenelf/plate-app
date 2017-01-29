import { inject, observer } from 'mobx-react'
import { Button, Form, Portal } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => (
  <Portal
    open={store.modalOpen}
    onClose={store.closeModal}
  >
  <div className='register-form'>
    <h1 style={{textAlign: 'center'}}>Sign Up Now</h1>
    <h1 style={{textAlign: 'center'}}>to Begin Serving Plates</h1>
    <p style={{textAlign: 'center', marginTop: 20}}>Plate makes task management more simplified
    for your every day routine, it's free too!</p>
    <div className='text-fields'>
      <h3>register</h3>
    </div>
    <style jsx>{`
      .register-form {
        padding: 20px;
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        border-radius: 10px;
        width: 500px;
        height: 500px;
        background-color: #FAFAFA;
        margin-left: auto;
        margin-right: auto;
      }
      .text-fields {
        margin-top: 50px;
        text-align: center;
      }
    `}</style>
  </div>
  </Portal>
)))
