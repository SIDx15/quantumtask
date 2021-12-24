import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMDp65pakvVMO4mXfHjmtg6yFOSj6umV8",
    authDomain: "loginauth-69205.firebaseapp.com",
    projectId: "loginauth-69205",
    storageBucket: "loginauth-69205.appspot.com",
    messagingSenderId: "50551115497",
    appId: "1:50551115497:web:c3d44e11617b5c678b2a78",
    measurementId: "G-W2DP585M7B"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const googleauthprovider = new firebase.auth.GoogleAuthProvider();
  const facebookauthprovider = new firebase.auth.FacebookAuthProvider();

  export {auth, googleauthprovider, facebookauthprovider};