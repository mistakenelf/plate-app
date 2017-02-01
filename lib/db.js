import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE',
  authDomain: 'plate-a0b1b.firebaseapp.com',
  databaseURL: 'https://plate-a0b1b.firebaseio.com',
  storageBucket: 'plate-a0b1b.appspot.com',
  messagingSenderId: '1011831735527'
}

try {
  firebase.initializeApp(config)
} catch (err) {
  // we skip the 'already exists' message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const db = firebase.database()
export const auth = firebase.auth()

