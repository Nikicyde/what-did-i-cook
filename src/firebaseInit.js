import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCB5B6dCC64GRrjkUhAAdxu1OCnqQJS2JQ",
    authDomain: "what-did-i-cook.firebaseapp.com",
    projectId: "what-did-i-cook",
    storageBucket: "what-did-i-cook.appspot.com",
    messagingSenderId: "68495017119",
    appId: "1:68495017119:web:491e9fd150c2a667108eaa",
    measurementId: "G-Q9RNX19DE6"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;