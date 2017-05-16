import Card from '../../../../components/Card/Card'
import React from 'react'

const ThreeMembershipCard = () => {
  return (
    <Card style={{ textAlign: 'center', minHeight: 200 }}>
      <span className="price">$3</span>
      <span className="month"> /month</span>
      <br />
      <span className="membership">Basic</span>
      <hr />
      <div className="member-details">
        <span>50 Plates</span>
        <br />
        <span>Plate Support</span>
        <br />
        <em>Coming Soon!</em>
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

export default ThreeMembershipCard
