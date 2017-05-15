import FiveMembershipCard from './FiveMembershipCard'
import FreeMembershipCard from './FreeMembershipCard'
import React from 'react'
import ThreeMembershipCard from './ThreeMembershipCard'

const PriceSection = () => {
  return (
    <div>
      <div className="row price-section">
        <div className="membership-header col-sm-12 col-md-12 col-lg-12">
          <div className="center-text">
            Choose the plan depending on how busy you are. Change anytime!
          </div>
        </div>
      </div>
      <div className="row price-section">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card-side">
            <FreeMembershipCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card">
            <ThreeMembershipCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
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
        .center-text {
          text-align: center;
        }
        .price-section {
          padding: 30px;
          background-color: #536E8D;
        }
      `}</style>
    </div>
  )
}

export default PriceSection
