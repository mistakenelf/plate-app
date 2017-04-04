const express = require('express');
const next = require('next');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const schema = require('./graphql');
const env = require('../env-config');

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

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

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/');
  });

  server.get('/dashboard', (req, res) => {
    renderAndCache(req, res, '/dashboard');
  });

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

function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}
