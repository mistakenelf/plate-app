import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => (
  <div>
    {store.modalOpen
     ? <div className="modal fadeIn">
          <h1 style={{color: 'white', textAlign: 'center'}} onTouchTap={store.closeModal}>Close</h1>
          <h1 style={{color: 'white', textAlign: 'center'}}>Login</h1>
          <h1 style={{color: 'white', textAlign: 'center'}}>Register</h1>
       </div>
     : <div className="modal" style={{display: 'none'}} />
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
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }

      @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 0.8;}
      }

      @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 0.8;}
      }

      .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
      }

      @-webkit-keyframes fadeOut {
        0% {opacity: 0.8;}
        100% {opacity: 0;}
      }

      @keyframes fadeOut {
        0% {opacity: 0.8;}
        100% {opacity: 0;}
      }

      .fadeOut {
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
      }

    `}</style>
  </div>
)))
