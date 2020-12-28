import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAjGqHrbWNjF95DeNRsMw5UYssR_7SNBAE',
  authDomain: 'crwn-db-73ed3.firebaseapp.com',
  projectId: 'crwn-db-73ed3',
  storageBucket: 'crwn-db-73ed3.appspot.com',
  messagingSenderId: '1045635077741',
  appId: '1:1045635077741:web:98ade8bc399a3c8309d164',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
