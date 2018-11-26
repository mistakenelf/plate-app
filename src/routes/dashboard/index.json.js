export async function get(req, res, next) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { slug } = req.params;

  const data = {
    field: 'test',
    value: 'testing'
  }

  if (data !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    next();
  }
}
