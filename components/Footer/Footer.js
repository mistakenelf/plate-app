import Divider from "material-ui/Divider";
import React from "react";

export default () => (
  <div>
    <div className="footer-main">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl"
      >
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
          <ul>
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <h3>Get In Touch</h3>
          <div className="divider-style">
            <Divider />
          </div>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
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

        .divider-style {
          opacity: 0.2;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      `
      }
    </style>
  </div>
);
