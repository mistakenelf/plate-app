import React from "react";

export default () => (
  <div className="home-details">
    <div className="initial-row row full-height">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2>Easily create tasks</h2><br />
        <p>
          {" "}
          Create and manage tasks without any pain.<br />
          Our interface provides the most simplistic way for creatings tasks
        </p>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6col-xl-6">
        <img src="/static/img/test.png" />
      </div>
    </div>
    <div className="initial-row row full-height">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2>Easily create tasks</h2><br />
        <p>
          Create and manage tasks without any pain.<br />
          Our interface provides the most simplistic way for creatings tasks
        </p>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6col-xl-6">
        <img src="/static/img/test.png" />
      </div>
    </div>
    <div className="initial-row row full-height">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2>Easily create tasks</h2><br />
        <p>
          Create and manage tasks without any pain.<br />
          Our interface provides the most simplistic way for creatings tasks
        </p>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6col-xl-6">
        <img src="/static/img/test.png" />
      </div>
    </div>
    <style jsx>
      {
        `
      .home-details {
        padding: 80px;
      }
      .initial-row {
        height: 300px;
        margin-bottom: 50px;
      }
      h2 {
        font-weight: normal;
      }
      img {
        width: 100%;
        height: auto;
      }
       @media only screen
        and (min-device-width : 1080px) {
          .initial-row {
            margin-bottom: 350px;
          }
        }
    `
      }
    </style>
  </div>
);
