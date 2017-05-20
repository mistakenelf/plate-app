import Card from '../../../components/Card/Card'
import React from 'react'

const SimplicityCard = () => {
  return (
    <Card style={{ textAlign: 'center', minHeight: 200 }}>
      <span className="header">Simplicity</span>
      <hr />
      <div className="card-details">
        We make task management so simple anyone can do it.
        If you ever need help, just contact us and we are
        more than happy to help, or take suggestions on what
        could be done better.
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

export default SimplicityCard
