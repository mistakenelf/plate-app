import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import helmet from 'helmet'
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import { Store } from 'svelte/store.js'
import { json } from 'body-parser'

import * as sapper from '../__sapper__/server.js'
import './utils/db'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const FileStore = sessionFileStore(session)

polka()
  .use(
    json(),
    compression({ threshold: 0 }),
    helmet(),
    session({
      secret: 'plate',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 31536000
      },
      store: new FileStore({
        path: '.sessions'
      })
    }),
    sirv('static', { dev }),
    sapper.middleware({
      store: req => {
        return new Store({
          user: req.session && req.session.user
        })
      }
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
