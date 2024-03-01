//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app'

//My webapp's firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAfrCywaakFgs01H9yShkqWmTo7RC3CahY",
    authDomain: "fir-authentication-47f17.firebaseapp.com",
    projectId: "fir-authentication-47f17",
    storageBucket: "fir-authentication-47f17.appspot.com",
    messagingSenderId: "944446698074",
    appId: "1:944446698074:web:ec6f24de38d4a9b1259e63"
};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
