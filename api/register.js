const faunadb = require('faunadb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  const password = await bcrypt.hash(data.password, 8);

  try {
    const dbs = await client.query(
      q.Create(q.Collection('users'), {
        data: {
          email: data.email,
          password,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
        },
      }),
    );

    const result = {
      auth: true,
      token: signToken(dbs.ref.value.id),
      user: {
        ...dbs.data,
        id: dbs.ref.value.id,
      },
    };

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
