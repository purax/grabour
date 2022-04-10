import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnUzS02Oq4FBCSwputEAmMkpcDHwGlruA",
    authDomain: "grabour-5e478.firebaseapp.com",
    projectId: "grabour-5e478",
    storageBucket: "grabour-5e478.appspot.com",
    messagingSenderId: "385590526348",
    appId: "1:385590526348:web:d2473345e1daf9719756a9",
    measurementId: "G-7583W3HKGC"
};
let app;
if ( firebase.apps.length === 0 )
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export {db ,auth} ; 