import React from "react";

const HomeDetails = () => {
  return (
    <div className="home-details">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-spacing">
          <h2>Easily create tasks</h2><br />
          <p>
            {" "}
            Create and manage tasks without any pain.<br />
            Our interface provides the most simplistic way for creatings tasks
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 img-spacing">
          <img src="/static/img/taskIcon/taskIconBlue.png" alt="Blue Task" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-spacing">
          <h2>Easily create tasks</h2><br />
          <p>
            Create and manage tasks without any pain.<br />
            Our interface provides the most simplistic way for creatings tasks
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 img-spacing">
          <img
            src="/static/img/taskIcon/taskIconOrange.png"
            alt="Orange Task"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-spacing">
          <h2>Easily create tasks</h2><br />
          <p>
            Create and manage tasks without any pain.<br />
            Our interface provides the most simplistic way for creatings tasks
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 img-spacing">
          <img src="/static/img/taskIcon/taskIconGreen.png" alt="Green Task" />
        </div>
      </div>
      <style jsx>
        {
          `
          .home-details {
            padding: 80px;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .img-spacing {
            margin-bottom: 30px;
          }
          .text-spacing {
            margin-bottom: 10px;
          }
          `
        }
      </style>
    </div>
  );
};

export default HomeDetails;
