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

const comparePassword = async (eventPassword, userPassword, userId) => {
  const passwordIsValid = await bcrypt.compare(eventPassword, userPassword);

  if (passwordIsValid) {
    return signToken(userId);
  } else {
    return Promise.reject(new Error('The credentials do not match'));
  }
};

module.exports = async (req, res) => {
  const data = JSON.parse(req.body);

  try {
    const dbs = await client.query(
      q.Get(q.Match(q.Index('users_by_username'), data.username)),
    );

    const token = await comparePassword(
      data.password,
      dbs.data.password,
      dbs.ref.value.id,
    );

    const payload = {
      auth: true,
      token,
      user: {
        ...dbs.data,
        id: dbs.ref.value.id,
      },
    };

    return res.status(200).json(payload);
  } catch (e) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
};
