export default ({ open }) => (
  <div>
    <style jsx>{`
      .modal {
        opacity: 0.2;
        height: 100vh;
        width: 100%;
        background-color: black;
      }
    `}</style>
    {open 
     ? <div className="modal"  />
     : <div className="modal" style={{display: 'none'}}  />
    }
  </div>
)