import React from 'react'

const Body = () => {
  return (
    <div className="body">
      <div className="row section">
        <div className="align-items col-xs-12 col-sm-12 col-md-6 col-lg-6 center-xs center-sm center-md center-lg center-lg">
          <img src="/static/img/mobile.png" />
        </div>
        <div className="align-items col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="segment">
            <h2 className="section-titles">Easily manage your tasks</h2>
            <p>
              Manage your tasks easily through an elegant and simple interface.
              Never forget what's on your list of tasks to be completed.
            </p>
          </div>
        </div>
      </div>
      <div className="row section-grey">
        <div className="align-items one col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="segment">
            <h2 className="section-titles">On the go</h2>
            <p>
              Edit and view your tasks on all platforms. Our responsive design allows
              for ease of access on all devices. Big, small, huge!
            </p>
          </div>
        </div>
        <div className="align-items two col-xs-12 col-sm-12 col-md-6 col-lg-6 center-xs center-sm center-md center-lg center-lg">
          <img src="/static/img/mobile.png" />
        </div>
      </div>
      <style jsx>
        {`
          .body {
            padding: 5px;
            height: auto;
          }
          .section {
            width: auto;
            height: 350px;
          }
          .section-grey {
            width: auto;
            height: 350px;
            background-color: #FAFAFA;
          }
          .align-items {
            margin-top: auto;
            margin-bottom: auto;
          }
          img {
            padding: 10px;
          }
          .section-titles {
            color: #172E4F;
            margin-bottom: 10px;
          }
          .segment {
            width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 1030px) {
            .one{order: 1}
            .two{order: 0}
          }
        `}
      </style>
    </div>
  )
}

export default Body
