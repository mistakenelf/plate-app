const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const MongoClient = require('mongodb').MongoClient;
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const cache = require('./cache');
const schema = require('./graphql');
const env = require('../env-config');

const port = 3000;

module.exports = app
  .prepare()
  .then(() =>
    server
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(helmet())
      .use(cache(app))
      .use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress(req => ({
          schema,
          rootValue: {
            db: req.app.locals.db
          }
        }))
      )
      .use(
        '/graphiql',
        graphiqlExpress({
          endpointURL: '/graphql'
        })
      )
      .use((req, res) => handle(req, res)))
  .then(() => {
    MongoClient.connect(env.DB_CONNECTION_STRING, {
      promiseLibrary: Promise
    })
      .catch(err => console.error(err.stack))
      .then(db => {
        console.log('Database Connection Successful');
        server.locals.db = db;
        server.listen(port, err => {
          if (err) throw err;
          console.log(`> Ready on http://localhost:${port}`);
        });
      });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
