import PageHeader from '../../components/PageHeader/PageHeader'
import React from 'react'

const About = () => {
  return (
    <div className="container">
      <PageHeader headerText="About Us" />
      <p>
        We are a team of two developers, also brothers, who are determined to make task management
        easier, and more fun to do. It was built as a learning experience for us, but we realized that
        maybe other would want to use it as well, so Plate was born.
      </p>
    </div>
  )
}

export default About
