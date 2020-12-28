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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(
    '🚀 ~ file: firebase.utils.js ~ line 21 ~ createUserProfileDocument ~ userAuth',
    userAuth
  );

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
