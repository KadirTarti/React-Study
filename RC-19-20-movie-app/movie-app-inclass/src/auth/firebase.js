import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// const firebaseConfig = {
//   apiKey: "AIzaSyCnd0LtrprC2fRsKWlGC9RwLHuxnEVwiIk",
//   authDomain: "mymovieapp-5ab4d.firebaseapp.com",
//   projectId: "mymovieapp-5ab4d",
//   storageBucket: "mymovieapp-5ab4d.appspot.com",
//   messagingSenderId: "213261444985",
//   appId: "1:213261444985:web:41e3a17f9234b9e4af31a8"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
