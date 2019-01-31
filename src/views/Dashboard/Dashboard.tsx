import React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

interface Task {
  name: string
  description: string
}

function Dashboard() {
  return (
    <div>
      <Link to="/">Login</Link>
      <Query
        query={gql`
          {
            tasks {
              name
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.tasks.map(({ name, description }: Task) => (
            <div key={name}>
              <p>
                {name}: {description}
              </p>
            </div>
          ))
        }}
      </Query>
    </div>
  )
}

export default Dashboard
