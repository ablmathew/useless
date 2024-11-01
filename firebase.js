// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const {getFireStore} = require('firebase/firestore')
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
let app;
let fireStoreDB;
const initializeFirebaseApp = ()=>{

    try{
        app = initializeApp(firebaseConfig)
        fireStoreDB = getFireStore()
    }catch(error){
 console.log(error)
    }
}
const getFirebaseApp = ()=>app
//const analytics = getAnalytics(app);

module.exports={
    initializeFirebaseApp,
    getFirebaseApp
}