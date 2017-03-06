import React from "react";

export default () => (
  <div>
    <div className="footer-main">
      <div
        className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl"
      >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <h2>Plate</h2>
          <br />
          <p>
            Plate is the easiest way to manage your tasks<br />
            Check out our resources to learn more about<br />
            getting started.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <ul>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <ul>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      className="footer-copyright row full-height middle-xs middle-sm middle-md middle-lg middle-xl"
    >
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        This is the copyright area.
      </div>
    </div>
    <style jsx>
      {
        `
        .footer-main {
          color: white;
          background-color: #50475C;
          height: 250px;
          padding: 30px;
        }
        .footer-main p {
          color: #bdbdbd;
        }
        .footer-main ul {
          list-style-type: none;
        }
        .footer-copyright {
          color: white;
          background-color: #343F53;
          padding: 20px;
        }
      `
      }
    </style>
  </div>
);
