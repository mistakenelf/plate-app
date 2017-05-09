import Card from '../../../../components/Card/Card'
import React from 'react'

const FreeMembershipCard = () => {
  return (
    <Card style={{ textAlign: 'center' }}>
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

export default FreeMembershipCard
