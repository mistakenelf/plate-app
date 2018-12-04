const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')

const db = require('./db')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())

app.get('/api/health', (req, res) => {
  res.json({ health: '100%' })
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

if (process.env.NODE_ENV === 'production') {
  app.use(
    '/service-worker.js',
    express.static(path.join(__dirname, '../dist/service-worker.js'))
  )
  app.use(express.static(path.join(__dirname, '../dist')))
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
