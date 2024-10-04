// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzyDALMhTA4wpeJw00y_zYIJ6psZK8vAQ",
    authDomain: "contacts-f0254.firebaseapp.com",
    projectId: "contacts-f0254",
    storageBucket: "contacts-f0254.appspot.com",
    messagingSenderId: "317119706391",
    appId: "1:317119706391:web:8b42381bdb4c774e567352"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)