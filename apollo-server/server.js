import path from 'path'
import express from 'express'

export default app => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')))
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'))
    })
  }
}
