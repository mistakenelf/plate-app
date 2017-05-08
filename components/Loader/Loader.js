import React from 'react'

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-donut" />
      <style jsx>
        {`
          .loader {
            display: flex;
            margin-top: 100px;
            width: 100%:
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default Loader
