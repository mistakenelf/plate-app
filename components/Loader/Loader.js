import React from 'react'

export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner-donut large" />
      <style jsx>{`
        .loader {
          display: flex;
          margin-top: 100px;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
