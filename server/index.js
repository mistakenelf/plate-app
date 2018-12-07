import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import path from 'path'

import db from './db'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())

app.get('/api/health', (req, res) => {
  res.json({ health: '102%' })
})

app.get('/api/todo-lists', (req, res) => {
  res.json(db.get('todoLists').value())
})

app.get('/api/todo-lists/:id', (req, res) => {
  res.json(
    db
      .get('todoLists')
      .find({ id: parseInt(req.params.id, 10) })
      .value()
  )
})

app.post('/api/login', (req, res) => {
  res.json({
    token: 'need to implement token'
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(
    '/service-worker.js',
    express.static(path.join(__dirname, '../dist/service-worker.js'))
  )
  app.use(express.static(path.join(__dirname, '../build')))
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
