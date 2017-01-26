import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => (
  <div>
    {store.modalOpen &&
      <div className='modal fadeIn'>
        <h1 style={{color: 'white', textAlign: 'center', cursor: 'pointer'}} onTouchTap={store.closeModal}>Close</h1>
        <h1 style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>Login</h1>
        <h1 style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>Register</h1>
      </div>
    }
    <style jsx>{`
      .modal {
        height: 100vh;
        width: 100%;
        padding-top: 110px;
        padding-bottom: 110px;
        opacity: 0.8;
        background-color: black;
        z-index: 9999;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
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
