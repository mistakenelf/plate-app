import Divider from "material-ui/Divider";
import Link from "next/link";
import React from "react";

const FooterDesktop = () => {
  return (
    <div className="footer-main">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <h3>Plate</h3>
          <div className="divider-style">
            <Divider />
          </div>
          <p>
            Plate is the easiest way to manage your tasks<br />
            Check out our resources to learn more about<br />
            getting started.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <h3>Quick Links</h3>
          <div className="divider-style">
            <Divider />
          </div>
          <Link prefetch href="/register">
            <a className="footer-links">Register</a>
          </Link>
          <br />
          <Link prefetch href="/login">
            <a className="footer-links">
              Login
            </a>
          </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <h3>Get In Touch</h3>
          <div className="divider-style">
            <Divider />
          </div>
          <Link prefetch href="/">
            <a className="footer-links">About Us</a>
          </Link>
          <br />
          <Link prefetch href="/">
            <a className="footer-links">Contact Us</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {
          `
        .footer-main {
          color: white;
          background-color: #1E2532;
          height: 250px;
          padding: 30px;
        }
        .footer-main p {
          color: #bdbdbd;
        }
        .footer-main ul {
          list-style-type: none;
          color: #bdbdbd;
        }
        .footer-main ul li {
          margin-bottom: 5px;
        }
        .footer-links {
          color: #bdbdbd;
          display: inline-block;
          margin-bottom: 5px;
        }
        .footer-links:hover {
          color: #ffffff;
        }
        .divider-style {
          opacity: 0.2;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .copyright {
          color: white;
          background-color: #343F53;
          padding: 5px;
          font-size: .2em;
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
            display: none;
          }
        }
      `
        }
      </style>
    </div>
  );
};

export default FooterDesktop;
