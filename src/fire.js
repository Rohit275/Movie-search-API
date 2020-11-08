import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCYKKhGf2LXCsnC3zHEjExC6f0fwX88hAk",
    authDomain: "login-6ee49.firebaseapp.com",
    databaseURL: "https://login-6ee49.firebaseio.com",
    projectId: "login-6ee49",
    storageBucket: "login-6ee49.appspot.com",
    messagingSenderId: "467974871382",
    appId: "1:467974871382:web:e7c119ff9b186aa02c5ef7"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;