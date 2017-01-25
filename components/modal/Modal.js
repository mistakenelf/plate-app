export default ({ open, closeModal }) => (
  <div>
    {open
     ? <div className="modal">
          <h1 style={{color: 'white', textAlign: 'center'}} onTouchTap={closeModal}>Close</h1>
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
      }
    `}</style>
  </div>
)
