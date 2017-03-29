import React from "react";

const HomeDetails = () => {
  return (
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
          <div className="advertisement" />
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
          <div className="advertisement" />
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
          <div className="advertisement" />
        </div>
      </div>
      <style jsx>
        {
          `
          .advertisement {
            height: 100%;
            width: 100%;
            background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
          }
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
            @media only screen
            and (min-device-width : 768px) {
              .initial-row {
                margin-bottom: 150px;
              }
            }
          `
        }
      </style>
    </div>
  );
};

export default HomeDetails;
