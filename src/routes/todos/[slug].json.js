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

export async function post(req, res, next) {
  const { slug } = req.params
  const { currentTodo, status } = req.body

  const data = db
    .get('todoLists')
    .find({ id: parseInt(slug, 10) })
    .get('todos')
    .find({ id: parseInt(currentTodo, 10) })
    .assign({ completed: !status })
    .write()

  if (data !== null) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    next()
  }
}
