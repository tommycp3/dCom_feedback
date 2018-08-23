import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-yKpxcSt_-ybD9J1klFX_u8V98klmYqw",
    authDomain: "dcomfeedback.firebaseapp.com",
    databaseURL: "https://dcomfeedback.firebaseio.com",
    projectId: "dcomfeedback",
    storageBucket: "dcomfeedback.appspot.com",
    messagingSenderId: "564314964680"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


