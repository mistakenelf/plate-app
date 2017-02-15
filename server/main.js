const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`]

const resolvers = {
  Query: {
    hello (root) {
      return 'world'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.prepare()
  .then(() => {
    const server = express()

    server.use('/graphql', bodyParser.json(), graphqlExpress({
      schema
    }))

    server.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql'
    }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(4000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:4000')
    })
  })
