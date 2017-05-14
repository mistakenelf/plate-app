import Card from '../../../../components/Card/Card'
import React from 'react'

const FiveMembershipCard = () => {
  return (
    <Card style={{ textAlign: 'center' }}>
      <span className="price">$5</span>
      <span className="month"> /month</span>
      <br />
      <span className="membership">Advanced</span>
      <hr />
      <div className="member-details">
        <span>Unlimited plates</span>
        <br />
        <span>Plate support</span>
      </div>
      <style jsx>{`
        .price {
          font-size: 49px;
        }
        .month {
          font-size: 20px;
        }
        .member-details {
          margin-top: 10px;
        }
      `}</style>
    </Card>
  )
}

export default FiveMembershipCard
