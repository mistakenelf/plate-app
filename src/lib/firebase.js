import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  appId: process.env.APP_ID
})

const db = firebase.firestore(app)
const auth = firebase.auth(app)

export { app, auth, db }
export default firebase
