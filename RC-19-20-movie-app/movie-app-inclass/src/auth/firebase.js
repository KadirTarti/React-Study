import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyDtcdq-Efl6CxzxAUCZvu85wdnzO4R0Vb0",
//     authDomain: "movie-app-de8.firebaseapp.com",
//     projectId: "movie-app-de8",
//     storageBucket: "movie-app-de8.appspot.com",
//     messagingSenderId: "1097072051272",
//     appId: "1:1097072051272:web:40ec5e225ea3526abbc47d"
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
