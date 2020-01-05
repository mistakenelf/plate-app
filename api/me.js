const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  const decoded = await jwt.verify(data.token, process.env.JWT_SECRET);

  if (decoded) {
    try {
      const dbs = await client.query(
        q.Get(q.Ref(q.Collection('users'), decoded.id)),
      );

      res.status(200).json(dbs);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};
