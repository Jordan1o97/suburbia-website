import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBR_7t7MF9sLOMb3ArJd9rMjcKiL3W4dJA",
    authDomain: "suburbia-clothing.firebaseapp.com",
    databaseURL: "https://suburbia-clothing-default-rtdb.firebaseio.com",
    projectId: "suburbia-clothing",
    storageBucket: "suburbia-clothing.appspot.com",
    messagingSenderId: "1086967634860",
    appId: "1:1086967634860:web:13f692f30e8a661c62b809",
    measurementId: "G-0QQX554G77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;