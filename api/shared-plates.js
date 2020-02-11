const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  const id = JSON.parse(req.body);

  try {
    const dbs = await client.query(
      q.Map(q.Paginate(q.Match(q.Index('plates_sharedWith'), id)), ref =>
        q.Get(ref),
      ),
    );

    return res.status(200).json(dbs.data);
  } catch (e) {
    return res.status(e.requestResult.statusCode).json({ error: e.message });
  }
};
