export default ({ open, closeModal }) => (
  <div>
    {open
     ? <div className="modal" onClick={closeModal}  />
     : <div className="modal" style={{display: 'none'}}  />
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
