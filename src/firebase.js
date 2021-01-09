import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACyZePJy6__YpBOqtZ3oxwaGHjd_a0Efk",
  authDomain: "linkedin-demo-clone.firebaseapp.com",
  projectId: "linkedin-demo-clone",
  storageBucket: "linkedin-demo-clone.appspot.com",
  messagingSenderId: "557905086494",
  appId: "1:557905086494:web:f8e7eb4e051142830bc60f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }