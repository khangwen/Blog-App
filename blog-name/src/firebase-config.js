// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZTW-O9fcAVHbjQipe0wfF_LUsQ3HuFbQ",
    authDomain: "blog-app-2-e83e4.firebaseapp.com",
    projectId: "blog-app-2-e83e4",
    storageBucket: "blog-app-2-e83e4.appspot.com",
    messagingSenderId: "306816517650",
    appId: "1:306816517650:web:5d019e51ce896194af3acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();