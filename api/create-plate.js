const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  const todoItem = {
    data,
  };

  try {
    const dbs = await client.query(q.Create(q.Collection('plates'), todoItem));
    res.status(200).json(dbs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
