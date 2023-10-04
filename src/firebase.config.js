// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhx6cUgmKPI8UYgxoPdbMDKelL9_zZ4K4",
  authDomain: "form-auth-8dda3.firebaseapp.com",
  projectId: "form-auth-8dda3",
  storageBucket: "form-auth-8dda3.appspot.com",
  messagingSenderId: "150157982788",
  appId: "1:150157982788:web:b01cfe118e127b80b25011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=  getAuth(app);
export default auth;