const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const token = JSON.parse(req.body);
  let verifiedToken;

  try {
    verifiedToken = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return e;
  }

  if (verifiedToken) {
    try {
      const dbs = await client.query(
        q.Get(q.Ref(q.Collection('users'), verifiedToken.id)),
      );

      res.status(200).json({
        ...dbs.data,
        id: dbs.ref.value.id,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  } else {
    res.status(401).json({ error: 'unauthorized user' });
  }
};
