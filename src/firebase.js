// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_qK71z4Mb56Z1EOH84nk8yvxbv5hRPfU",
  authDomain: "todo-app-afc5a.firebaseapp.com",
  projectId: "todo-app-afc5a",
  storageBucket: "todo-app-afc5a.appspot.com",
  messagingSenderId: "571353437429",
  appId: "1:571353437429:web:02f0581f287c840975e1bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)