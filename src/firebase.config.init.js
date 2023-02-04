// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARwqAVGCcz28xvNRpU3RRDqXz5VJBaZF0",
    authDomain: "doctors-portal-8af1e.firebaseapp.com",
    projectId: "doctors-portal-8af1e",
    storageBucket: "doctors-portal-8af1e.appspot.com",
    messagingSenderId: "307512458837",
    appId: "1:307512458837:web:b9ef49ca917bcd77f5dedc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;