import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyDbzzmiKMv5QqDtUHhI7EGf9UJBXfHrxiI",
  authDomain: "cicl-7a8a4.firebaseapp.com",
  projectId: "cicl-7a8a4",
  storageBucket: "cicl-7a8a4.appspot.com",
  messagingSenderId: "411737836003",
  appId: "1:411737836003:web:9f3f6f495d39e52713b8d6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
