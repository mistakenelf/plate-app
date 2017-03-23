const express = require("express");
const next = require("next");

const { graphiqlExpress, graphqlExpress } = require("graphql-server-express");
const bodyParser = require("body-parser");
const passport = require("passport");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

require("./connect");
require("./auth/init");

const schema = require("./graphql");

app.prepare().then(() => {
  const server = express();

  server.use(
    require("express-session")({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false
    })
  );

  server.use(passport.initialize());
  server.use(passport.session());

  server.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
