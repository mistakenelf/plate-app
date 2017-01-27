import { inject, observer } from 'mobx-react'

import { Grid } from 'reflexbox'
import Register from '../../modules/register/Register'

export default inject('store')(observer(({ store }) => (
  <div>
    {store.modalOpen &&
      <div className='modal fadeIn'>
        <h1 style={{color: 'white', textAlign: 'right', cursor: 'pointer', marginRight: 10}} onTouchTap={store.closeModal}>X</h1>
        <Grid col={12}>
          <Register />
        </Grid>
      </div>
    }
    <style jsx>{`
      .modal {
        height: 100vh;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 110px;
        opacity: 0.8;
        background-color: #3F51B5;
        z-index: 9999;
        position: absolute;
        align-items: center;
        justify-content: space-between;
        animation-duration: 500ms;
        animation-fill-mode: both;
      }

      @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 0.8;}
      }

      .fadeIn {
        animation-name: fadeIn;
      }

      @keyframes fadeOut {
        0% {opacity: 0.8;}
        100% {opacity: 0;}
      }

      .fadeOut {
        animation-name: fadeOut;
      }
    `}</style>
  </div>
)))
