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
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img src="/static/img/taskIcon/taskIconBlue.png" alt="Blue Task" />
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
          <img
            src="/static/img/taskIcon/taskIconOrange.png"
            alt="Orange Task"
          />
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
          <img src="/static/img/taskIcon/taskIconGreen.png" alt="Green Task" />
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
            height: 100%;
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
