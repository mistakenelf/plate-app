const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const username = JSON.parse(req.body);
  console.log(username);

  try {
    const dbs = await client.query(
      q.Get(q.Match(q.Index('users_by_username'), username)),
    );

    res.status(200).json(dbs);
  } catch (e) {
    res.status(e.requestResult.statusCode).json({ error: e.message });
  }
};
