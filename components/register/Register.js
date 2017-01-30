import { inject, observer } from 'mobx-react'

import { Button, Dimmer, Divider, Input } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => (
  <div>
    <Dimmer active={store.modalOpen}
      onClickOutside={store.closeModal}
      page
      >
      <div className='register-form'>
        <h1>Sign Up Now <br />
        to Begin Serving Plates</h1>
        <p style={{marginTop: 20}}>Create endless tasks for free!</p>
        <Input placeholder='Username' size='large' style={{marginBottom: '10px'}} />
        <br />
        <Input placeholder='Password' size='large' style={{marginBottom: '20px'}} />
        <br />
        <Divider />
        <Button primary>Register Now!</Button>
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
        width: 500px;
      }
      @media only screen and (max-width: 660px) {
        .register-form {
          width: 300px;
          padding-right: 10px;
          padding-left: 10px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
    `}</style>
  </div>
)))
