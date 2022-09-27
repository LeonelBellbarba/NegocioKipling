import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrFwGwAz1dtVHKySdpNuq9skUG0wjMt7o",
    authDomain: "basedatos-af590.firebaseapp.com",
    projectId: "basedatos-af590",
    storageBucket: "basedatos-af590.appspot.com",
    messagingSenderId: "952079457850",
    appId: "1:952079457850:web:aae3f335939fab505cdf03"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase