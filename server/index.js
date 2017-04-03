const express = require('express');
const next = require('next');

const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const schema = require('./graphql');
const env = require('../config');

app.prepare().then(() => {
  const server = express();

  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(req => ({ schema, rootValue: { db: req.app.locals.db } }))
  );

  server.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  MongoClient.connect(env.DB_CONNECTION_STRING, {
    promiseLibrary: Promise
  })
    .catch(err => console.error(err.stack))
    .then(db => {
      console.log('Database Connection Successful');
      server.locals.db = db;
      server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
      });
    });
});
