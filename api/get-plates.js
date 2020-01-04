const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(q.Paginate(q.Match(q.Index('all_plates'))), ref => q.Get(ref)),
    );
    res.status(200).json(dbs.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
