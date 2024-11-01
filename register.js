// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase/auth";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCnJ1ZsE7NhDuq_HgL6zwcbV0-nuwQvLYw",

    authDomain: "useless-c1da3.firebaseapp.com",

    databaseURL: "https://useless-c1da3-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "useless-c1da3",

    storageBucket: "useless-c1da3.firebasestorage.app",

    messagingSenderId: "486151434928",

    appId: "1:486151434928:web:56dbc5b6c021c60d4f8175",

    measurementId: "G-8YTN911QBV"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const submit = document.getElementById('submit').value;
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert("creating accoout...")
            window.location.href="grand.html";
        }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
});