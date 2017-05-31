import DonateCard from './DonateCard'
import React from 'react'
import SimplicityCard from './SimplicityCard'
import SupportCard from './SupportCard'

export default function DonateSection() {
  return (
    <div>
      <div className="row price-section">
        <div className="membership-header col-sm-12 col-md-12 col-lg-12">
          <div className="center-text">
            Wanna help out the project? Donate to us through PayPal to keep the project alive
          </div>
        </div>
      </div>
      <div className="row price-section">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card-side">
            <SimplicityCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card">
            <DonateCard />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="price-card-side">
            <SupportCard />
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
