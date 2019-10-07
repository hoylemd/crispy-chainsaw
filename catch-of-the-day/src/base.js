import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // paste firebase config here
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
