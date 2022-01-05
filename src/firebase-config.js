import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCg9h6a9CqMPYgUtC8Pyc3I3CRh_19fvvE",
    authDomain: "blog-be387.firebaseapp.com",
    projectId: "blog-be387",
    storageBucket: "blog-be387.appspot.com",
    messagingSenderId: "349737807281",
    appId: "1:349737807281:web:1dc45a8b3d33ebf63e6190",
    measurementId: "G-0YWFYQQY4V"
};
//inititalize firebase
const app = initializeApp(firebaseConfig);

//connection to our database
export const db = getFirestore(app);

//connection to our authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

