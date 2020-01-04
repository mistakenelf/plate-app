const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  try {
    const dbs = await client.query(
      q.Create(q.Collection('users'), {
        credentials: { password: data.password },
        data: { email: data.email },
      }),
    );

    res.status(200).json(dbs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
