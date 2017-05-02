import FooterDesktop from './FooterDesktop'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <FooterDesktop />
      <div className="copyright">
        © 2017, Plate
      </div>
      <style jsx>
        {`
          .copyright {
            color: #7D8A95;
            background-color: #223741;
            padding: 20px;
            font-size: .7em;
            text-align: center;
          }
          `}
      </style>
    </div>
  )
}

export default Footer
