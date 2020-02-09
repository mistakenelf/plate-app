const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  const todoItem = {
    data,
  };

  try {
    const dbs = await client.query(q.Create(q.Collection('plates'), todoItem));
    res.status(200).json(dbs);
  } catch (e) {
    res.status(e.requestResult.statusCode).json({ error: e.message });
  }
};
