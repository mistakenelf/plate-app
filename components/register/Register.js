import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => (
  <div>
    <Dimmer active={store.modalOpen}
      onClickOutside={store.closeModal}
      style={{position: 'fixed'}}
      >
      <div className='register-form'>
        <h1>Sign Up Now</h1>
        <h1>to Begin Serving Plates</h1>
        <p style={{marginTop: 20 }}>Plate makes task management more simplified
          for your every day routine, it's free too!</p>
        <div className='text-fields'>
          <h3>register</h3>
        </div>
      </div>
    </Dimmer>
    <style jsx>{`
      .register-form {
        color: black;
        padding: 20px;
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        border-radius: 10px;
        background-color: #FAFAFA;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      .text-fields {
        margin-top: 50px;
        text-align: center;
      }
    `}</style>
  </div>
)))
