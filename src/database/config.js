import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD8YF4ceTQN1tg_eUQfzai6P0zCZymPiDU",
  authDomain: "fluttr-776da.firebaseapp.com",
  databaseURL: "https://fluttr-776da.firebaseio.com",
  projectId: "fluttr-776da",
  storageBucket: "fluttr-776da.appspot.com",
  messagingSenderId: "7047440730"
};

firebase.initializeApp(config)

const database = firebase.database()

export {database}
