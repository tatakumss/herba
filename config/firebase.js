// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXmp-AsmsYeLIlgaVORclk5HMAIA0HURk",
  authDomain: "herbapedia-85d59.firebaseapp.com",
  projectId: "herbapedia-85d59",
  storageBucket: "herbapedia-85d59.firebasestorage.app",
  messagingSenderId: "504075856475",
  appId: "1:504075856475:web:cd7b0eb932d500d60e2d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);