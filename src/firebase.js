
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0v3mZy-lGy6LqsvfQgasz14h4HxnY95c",
  authDomain: "challenge-63995.firebaseapp.com",
  databaseURL: "https://challenge-63995.firebaseio.com",
  projectId: "challenge-63995",
  storageBucket: "challenge-63995.appspot.com",
  messagingSenderId: "527999311274",
  appId: "1:527999311274:web:21475c60cbd39461ca5fd3",
  measurementId: "G-BPY8YD5DD8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
