export default ({ open }) => (
  <div>
    <style jsx>{`
      .modal {
        height: 100vh;
        width: 100%;
        background-color: black;
        z-index: 9999 !important;
        position: relative;
      }
    `}</style>
    {open 
     ? <div className="modal"  />
     : <div className="modal" style={{display: 'none'}}  />
    }
  </div>
)