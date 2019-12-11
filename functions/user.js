const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

exports.handler = () => {
  return client
    .query(q.HasIdentity())
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
