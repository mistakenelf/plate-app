import path from 'path'
import express from 'express'

const distPath = path.resolve(__dirname, '../dist')

export default app => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(distPath))
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'))
    })
  }
}
