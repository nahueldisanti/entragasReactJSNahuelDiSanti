// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAhB7Xan1oRn--l1Jf-EQ2Emc8tKUdmydE",
    authDomain: "alta-llama.firebaseapp.com",
    projectId: "alta-llama",
    storageBucket: "alta-llama.appspot.com",
    messagingSenderId: "548911086498",
    appId: "1:548911086498:web:47dee5f29087b15d9110fb",
    measurementId: "G-RZTNC2089Q"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app)

export default db