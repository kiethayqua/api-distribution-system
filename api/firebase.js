const firebase = require('firebase');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd2X0eHrYWWBYyHfSF5mCuf3ZW2M4Rr34",
    authDomain: "distribution-system-1f661.firebaseapp.com",
    databaseURL: "https://distribution-system-1f661.firebaseio.com",
    projectId: "distribution-system-1f661",
    storageBucket: "distribution-system-1f661.appspot.com",
    messagingSenderId: "734857284763",
    appId: "1:734857284763:web:1854e936cd68af35508a3e",
    measurementId: "G-ED8PP0FSWR"
});

const db = firebaseApp.firestore();
module.exports = db;