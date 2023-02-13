import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGi3A1zjIQbJ1LKjE-wMlNhFRmS8tQuGE",
  authDomain: "tik1tok.firebaseapp.com",
  projectId: "tik1tok",
  storageBucket: "tik1tok.appspot.com",
  messagingSenderId: "638451526067",
  appId: "1:638451526067:web:00833ddedc4bd60cee83c6",
  measurementId: "G-Q7GS7ZBB14"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;