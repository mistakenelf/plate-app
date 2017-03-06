const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const schema = require('./schemas');

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(koaBody());

  router.post(
    '/graphql',
    graphqlKoa({
      schema
    })
  );

  router.get(
    '/graphql',
    graphqlKoa({
      schema
    })
  );

  router.get(
    '/graphiql',
    graphiqlKoa({
      endpointURL: './graphql'
    })
  );

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
