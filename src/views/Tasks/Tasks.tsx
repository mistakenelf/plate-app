import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

interface Task {
  name: string
  description: string
}

function Tasks() {
  return (
    <div>
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
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error :(</div>

          return data.tasks.map(({ name, description }: Task) => (
            <div key={name}>
              <div>
                {name}: {description}
              </div>
            </div>
          ))
        }}
      </Query>
    </div>
  )
}

export default Tasks
