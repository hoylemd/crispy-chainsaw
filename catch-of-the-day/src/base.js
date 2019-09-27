import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD4cV6RzODC-guI9fX0YVZIV3JFUhkVI7M',
  authDomain: 'catch-of-the-day-a2440.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-a2440.firebaseio.com',
  projectId: 'catch-of-the-day-a2440',
  storageBucket: 'catch-of-the-day-a2440.appspot.com',
  messagingSenderId: '806447017437',
  appId: '1:806447017437:web:fe4a2683ad6999ec679a34'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
