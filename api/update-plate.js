const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  try {
    const dbs = await client.query(
      q.Update(q.Ref(q.Collection('plates'), data.id), { data }),
    );

    return res.status(200).json(dbs);
  } catch (e) {
    return res.status(e.requestResult.statusCode).json({ error: e.message });
  }
};
