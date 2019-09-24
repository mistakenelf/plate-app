import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'
import { filter } from 'rxjs/operators'

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
})

const firestore = firebase.firestore(app)
const auth = firebase.auth(app)
const loggedIn$ = authState(auth).pipe(filter(user => !!user))

export { app, auth, firestore, collectionData, loggedIn$ }

export default firebase
