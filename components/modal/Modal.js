export default ({ open, closeModal }) => (
  <div>
    {open
     ? <div className="modal">
          <h1 style={{color: 'white', textAlign: 'center'}} onTouchTap={closeModal}>Close</h1>
       </div>
     : <div className="modal" style={{display: 'none'}} />
    }
    <style jsx>{`
      .modal {
        height: 100vh;
        width: 100%;
        background-color: black;
        z-index: 9999;
        position: absolute;
      }
    `}</style>
  </div>
)
