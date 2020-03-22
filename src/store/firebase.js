import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import 'firebase/storage';

import firebase from 'firebase/app';
import { writable } from 'svelte/store';

export const firebaseLoading = writable(true);
export const firebaseUser = writable(null);

export const firebaseConfig = {
  apiKey: 'AIzaSyCcv615ya9Uor9uK1MhIvZOqzqVhy-vzmQ',
  authDomain: 'plate-fd64a.firebaseapp.com',
  databaseURL: 'https://plate-fd64a.firebaseio.com',
  projectId: 'plate-fd64a',
  storageBucket: 'plate-fd64a.appspot.com',
  messagingSenderId: '816045518067',
  appId: '1:816045518067:web:11e6b1c965e9f586d35b86',
  measurementId: 'G-FZ24SC2Z26',
};

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app);

export const initializeFirebase = () => {
  firebase.performance();
  firebase.analytics();

  firebase.auth().onAuthStateChanged((res) => {
    if (res) {
      firebaseLoading.set(false);
      firebaseUser.set(res);
    } else {
      firebaseLoading.set(false);
    }
  });
};
