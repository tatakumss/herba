// config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXmp-AsmsYeLIlgaVORclk5HMAIA0HURk",
  authDomain: "herbapedia-85d59.firebaseapp.com",
  projectId: "herbapedia-85d59",
  storageBucket: "herbapedia-85d59.appspot.com",
  messagingSenderId: "504075856475",
  appId: "1:504075856475:web:cd7b0eb932d500d60e2d7e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
