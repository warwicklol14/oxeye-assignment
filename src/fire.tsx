import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9CceAxHkqEmFRqUkoy535ybrLMLrOSX4",
    authDomain: "oxeye-e31bc.firebaseapp.com",
    databaseURL: "https://oxeye-e31bc.firebaseio.com",
    projectId: "oxeye-e31bc",
    storageBucket: "oxeye-e31bc.appspot.com",
    messagingSenderId: "312419255891",
    appId: "1:312419255891:web:c2806769209ca34cd6a8a6",
    measurementId: "G-PH2BDF1SYN"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;