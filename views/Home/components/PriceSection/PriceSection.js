import FiveMembershipCard from './FiveMembershipCard'
import FreeMembershipCard from './FreeMembershipCard'
import React from 'react'
import ThreeMembershipCard from './ThreeMembershipCard'

const PriceSection = () => {
  return (
    <div>
      <div className="row price-section">
        <div className="membership-header col-sm-12 col-md-12 col-lg-12">
          <div
            style={{
              fontSize: '30px',
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
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="price-card-side">
            <FreeMembershipCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="price-card">
            <ThreeMembershipCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="price-card-side">
            <FiveMembershipCard />
          </div>
        </div>
      </div>
      <style jsx>{`
        .membership-header {
          margin-bottom: 20px;
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
      `}</style>
    </div>
  )
}

export default PriceSection
