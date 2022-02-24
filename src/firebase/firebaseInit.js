import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIFBf9sZsnYbaDG9KdeILFXS-CFrByQuY",
    authDomain: "e-learningwebsite-7a421.firebaseapp.com",
    projectId: "e-learningwebsite-7a421",
    storageBucket: "e-learningwebsite-7a421.appspot.com",
    messagingSenderId: "441352565784",
    appId: "1:441352565784:web:83ff6f3923bf51f624ff6d"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore;