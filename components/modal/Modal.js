import { inject, observer } from 'mobx-react'
import { Grid } from 'reflexbox'

export default inject('store')(observer(({ store }) => (
  <div>
    {store.modalOpen &&
      <div className='modal fadeIn'>
        <Grid col={12} px={2}>
          <h1 style={{color: 'white', textAlign: 'right', cursor: 'pointer'}} onTouchTap={store.closeModal}>X</h1>
        </Grid>
        <Grid col={12} pt={6}>
          <h1 style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>Login</h1>
        </Grid>
        <Grid col={12} pt={4}>
          <h1 style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>Register</h1>
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
        background-color: black;
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
