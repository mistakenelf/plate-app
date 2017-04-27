import React from 'react'

const Body = () => {
  return (
    <div className="body">
      <div className="lead-text">
        Wash and Create as many plates as you want.
        Get started now or if you want to learn more get
        in contact with us and we'll help out.
      </div>
      <img src="https://res.cloudinary.com/knipferrc/image/upload/v1493208940/plateLogo_wa3wpi.png" />
      <style jsx>
        {`
          .body {
            display: flex;
            padding: 5px;
            color: white;
            align-items: center;
            font-size: 20px;
            height: 300px;
            flex-direction: column;
            justify-content: center;
            background-color: rgb(255, 64, 129);
          }
          img {
            height: 100px;
            width: 100px;
          }
          .lead-text {
            text-align: center;
            font-size: 20px;
            margin-bottom: 15px;
          }
        `}
      </style>
    </div>
  )
}

export default Body
