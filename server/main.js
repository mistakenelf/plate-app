const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'hello world'
  }
}

app.prepare()
  .then(() => {
    const server = express()

    server.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: dev
    }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
