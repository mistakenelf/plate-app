const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

exports.handler = (event, context) => {
  const data = JSON.parse(event.body);

  return client
    .query(
      q.Login(q.Match(q.Index('users_by_email'), data.email), {
        password: data.password,
      }),
    )
    .then(response => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
