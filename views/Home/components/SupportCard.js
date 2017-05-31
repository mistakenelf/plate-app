import Card from '../../../components/Card/Card'
import React from 'react'

export default function SupportCard() {
  return (
    <Card style={{ textAlign: 'center', minHeight: 200 }}>
      <span className="header">Support</span>
      <hr />
      <div className="card-details">
        Plate strives to support as many browsers
        and devices as possible. If you ever notice
        an issue for a specific device, let us know and
        we will release a fix as quickly as possible.
      </div>
      <style jsx>{`
        .header {
          font-size: 49px;
        }
        .card-details {
          margin-top: 10px;
        }
      `}</style>
    </Card>
  )
}
