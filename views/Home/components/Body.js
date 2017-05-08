import Card from '../../../components/Card/Card'
import React from 'react'

const Body = () => {
  return (
    <div>
      <div className="row price-section">
        <div className="membership-header col-sm-12 col-md-12 col-lg-12">
          <div
            style={{
              fontSize: 20,
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            Choose the plan depending on how busy you are. Change anytime!
          </div>
        </div>
      </div>
      <div className="row price-section">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card-side">
            <Card>
              <span className="price">$0</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Free</span>
              <hr />
              <div className="member-details">
                <span>Manage 20 Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <input
                  type="button"
                  className="primary"
                  value="Register"
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card">
            <Card>
              <span className="price">$5</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Advanced</span>
              <hr />
              <div className="member-details">
                <span>Unlimited Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <input
                  type="button"
                  className="primary"
                  value="Buy Now"
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card-side">
            <Card>
              <span className="price">$3</span>
              <span className="month"> /month</span>
              <br />
              <span className="membership">Basic</span>
              <hr />
              <div className="member-details">
                <span>Manage 50 Tasks</span>
                <br />
                <span>Test</span>
                <br />
                <span>Test</span>
                <br />
                <input
                  type="button"
                  className="primary"
                  value="Buy Now"
                  style={{ marginTop: 40 }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section-grey {
            height: 350px;
            background-color: #FAFAFA;
            margin-top: 30px;
          }
          .section-titles {
            color: #172E4F;
            margin-bottom: 10px;
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
