import { db } from '../../utils/db'

export async function get(req, res, next) {
  const { slug } = req.params

  const data = {
    todoDetail: db
      .get('todoLists')
      .find({ id: parseInt(slug, 10) })
      .value()
  }

  if (data !== null) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    next()
  }
}
