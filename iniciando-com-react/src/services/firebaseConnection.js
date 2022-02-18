import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA4a0R5a8sFjR_YOOdWLwtDipEcaKuIHEg",
    authDomain: "sistema-99f5a.firebaseapp.com",
    projectId: "sistema-99f5a",
    storageBucket: "sistema-99f5a.appspot.com",
    messagingSenderId: "479365139136",
    appId: "1:479365139136:web:cd2a08b09b9d0ff5a63b25",
    measurementId: "G-PF97VE0T7R"
  };
  
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;