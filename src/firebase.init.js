// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBqqvfAyqX9CGP6cwGiKtWRGrwXWMdTDs",
  authDomain: "my-warehouse-management.firebaseapp.com",
  projectId: "my-warehouse-management",
  storageBucket: "my-warehouse-management.appspot.com",
  messagingSenderId: "298896806759",
  appId: "1:298896806759:web:449b2ae982c948c3c955c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;