export default ({ open, message }) => (
  <div className='message' style={{display: open ? 'flex' : 'none'}}>
    <h4>
      {message}
    </h4>
    <style jsx>{`
      .message{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: white;
        padding: 5px;
        border-radius: 5px;
      }
    `}</style>
  </div>
)
