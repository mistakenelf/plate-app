const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const id = JSON.parse(req.body);

  try {
    const dbs = await client.query(q.Get(q.Ref(`classes/plates/${id}`)));
    res.status(200).json(dbs);
  } catch (e) {
    res.status(e.requestResult.statusCode).json({ error: e.message });
  }
};
