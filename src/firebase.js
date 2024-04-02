import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC5AO66PDWYBJIfJdBT0AO_QIUQ_PJiwiI",
  authDomain: "react-app-ae84a.firebaseapp.com",
  projectId: "react-app-ae84a",
  storageBucket: "react-app-ae84a.appspot.com",
  messagingSenderId: "154131191465",
  appId: "1:154131191465:web:3c337de2ade27e26a5bbb8",
  measurementId: "G-8HW6P9LR9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

