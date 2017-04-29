import { Card } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
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
      <div className="row price-section">
        <div className="membership-header col-xs-12 col-sm-12 col-md-12 col-lg-12 center-xs center-sm center-md center-lg center-lg">
          <div style={{ fontSize: '25' }}>
            Choose the plan depending on how busy you are.
          </div>
          <div style={{ marginTop: 15, fontSize: '20' }}>Change anytime!</div>
        </div>
        <div className="align-items col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs center-sm center-md center-lg center-lg">
          <div className="price-card-side">
            <Card style={{ padding: 10 }}>
              <span className="price">$0</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Free</span>
              <Divider
                style={{ marginTop: 20, marginRight: 10, marginLeft: 10 }}
              />
              <div className="member-details">
                <span>Manage 20 Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <RaisedButton
                  label="Register"
                  primary
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="align-items col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs center-sm center-md center-lg center-lg">
          <div className="price-card">
            <Card style={{ padding: 10 }}>
              <span className="price">$5</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Advanced</span>
              <Divider
                style={{ marginTop: 20, marginRight: 10, marginLeft: 10 }}
              />
              <div className="member-details">
                <span>Unlimited Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <RaisedButton
                  label="Buy Now"
                  primary
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="align-items col-xs-12 col-sm-12 col-md-4 col-lg-4 center-xs center-sm center-md center-lg center-lg">
          <div className="price-card-side">
            <Card style={{ padding: 10 }}>
              <span className="price">$3</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Basic</span>
              <Divider
                style={{ marginTop: 20, marginRight: 10, marginLeft: 10 }}
              />
              <div className="member-details">
                <span>Manage 50 Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <RaisedButton
                  label="Buy Now"
                  primary
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .body {
            height: auto;
          }
          .section {
            width: auto;
            height: 350px;
            margin-top: 30px;
          }
          .section-grey {
            width: auto;
            height: 350px;
            background-color: #FAFAFA;
            margin-top: 30px;
          }
          .section-titles {
            color: #172E4F;
            margin-bottom: 10px;
          }
          .align-items {
            margin-top: auto;
            margin-bottom: auto;
          }
          img {
            padding: 10px;
          }
          .segment {
            width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          .membership-header {
            margin-bottom: 50px;
            color: white;
          }
          .price-section {
            padding: 30px;
            background-color: #536E8D;
            margin-bottom: 0;
          }
          .price-card-side {
            margin-top: 50px;
            width: 300px;
            margin-right: auto;
            margin-left: auto;
          }
          .price-card {
            width: 300px;
            margin-right: auto;
            margin-left: auto;
          }
          .price {
            font-size: 49px;
          }
          .month {
            font-size: 20px;
          }
          .member-details {
            margin-top: 10px;
          }

          @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 1030px) {
            .price-card {
              margin-bottom: 20px;
            }
            .price-card-side {
              margin-top: 0;
              margin-bottom: 20px;
            }
            .one{order: 1}
            .two{order: 0}
          }
        `}
      </style>
    </div>
  )
}

export default Body
