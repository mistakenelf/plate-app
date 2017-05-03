import Link from 'next/link'
import React from 'react'

const FooterDesktop = () => {
  return (
    <div className="footer-main">
      <div className="row main-content">
        <div className="section-margins col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <h3>Plate</h3>
          <p>
            Plate is the easiest way to manage your tasks
            Check out our resources to learn more about
            getting started.
          </p>
        </div>
        <div className="section-margins col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <h3>Quick Links</h3>
          <Link prefetch href="/terms">
            <a className="footer-links">Terms and Conditions</a>
          </Link>
          <br />
          <Link prefetch href="/team">
            <a className="footer-links">
              Meet the Team
            </a>
          </Link>
        </div>
        <div className="section-margins col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <h3>Get In Touch</h3>
          <Link prefetch href="/about">
            <a className="footer-links">About Us</a>
          </Link>
          <br />
          <Link prefetch href="/contactus">
            <a className="footer-links">Contact Us</a>
          </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <i
            style={{ color: '#3B5998', marginRight: 30 }}
            className="fa fa-facebook-square fa-3x"
            aria-hidden="true"
          />
          <i
            style={{ color: '#55ACEE', marginRight: 30 }}
            className="fa fa-twitter-square fa-3x"
            aria-hidden="true"
          />
          <i
            style={{ color: '#5481A3', marginRight: 30 }}
            className="fa fa-instagram fa-3x"
            aria-hidden="true"
          />
        </div>
      </div>
      <style jsx>
        {`
        h3 {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 4px;
          margin-bottom: 20px;
          margin-left: 13px; /*offset for hover effect*/
        }
        .footer-main {
          color: white;
          background-color: #223741;
          height: auto;
          padding-top: 100px;
          padding-bottom: 100px;
          padding-left: 50px;
          padding-right: 50px;
        }
        .main-content {
          margin-top: 50px;
        }
        .footer-main p {
          margin-left: 13px;
          color: #89A1C0;
          font-size: 13px;
        }
        .footer-main ul {
          list-style-type: none;
          color: #bdbdbd;
        }
        .footer-main ul li {
          margin-bottom: 5px;
        }
        .footer-links {
          color: #89A1C0;
          display: inline-block;
          margin-bottom: 5px;
          font-size: 13px;
        }
        .footer-links:hover {
          color: #ffffff;
        }
        a {
          text-decoration: none;
        }
        a::before,
        a::after {
          display: inline-block;
          opacity: 0;
          transition: transform 0.3s, opacity 0.2s;
        }
        a::before {
          padding-right:10px;
          content: '[';
          transform: translateX(10px);
        }
        a::after {
          padding-left:10px;
          content: ']';
          transform: translateX(-10px);
        }
        a:hover::before,
        a:hover::after,
        a:focus::before,
        a:focus::after {
          opacity: 1;
          transform: translateX(0px);
        }
        @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 1030px) {
          .footer-main {
            padding: 50px;
          }
          .main-content {
            text-align: center;
          }
          .section-margins {
            margin-bottom: 40px;
          }
          .footer-main p {
            text-align: center;
          }
        }
      `}
      </style>
    </div>
  )
}

export default FooterDesktop
