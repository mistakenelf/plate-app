import Card from '../../../components/Card/Card'
import React from 'react'

const NoPlatesFound = () => {
  return (
    <Card style={{ textAlign: 'center' }}>
      <div className="content">
        You currently have nothing on your dashboard. Add a new plate to get started
      </div>
      <style jsx>{`
        .content {
          font-size: 20px;
          font-weight: bolder;
        }
      `}</style>
    </Card>
  )
}

export default NoPlatesFound
