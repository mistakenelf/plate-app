import { db } from '../../utils/db'

export async function get(req, res, next) {
  const data = db.get('todoLists').value()

  if (data !== null) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    next()
  }
}
