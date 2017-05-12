import PageHeader from '../../components/PageHeader/PageHeader'
import React from 'react'

const MeetTheTeam = () => {
  return (
    <div className="container">
      <PageHeader headerText="Plate Team" />
      <div className="heading-text">Developers:</div>
      <div>
        <span className="lead-text">Tyler Knipfer: </span>
        <span className="username-text">@knipferrc</span>
      </div>
      <div>
        <span className="lead-text">Alex Knipfer: </span>
        <span className="username-text">@alexknipfer</span>
      </div>
      <style jsx>{`
        .lead-text {
          font-weight: bolder;
          font-size: 20px;
        }
        .username-text {
          font-style: italic;
          font-size: 20px;
        }
        .heading-text {
          text-decoration: underline;
          font-size: 30px;
        }
      `}</style>
    </div>
  )
}

export default MeetTheTeam
