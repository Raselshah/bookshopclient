import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBM_Rk1kii8cCsL4RxpFeX3K7_AVFTgCw0",
  authDomain: "bookshop-a1201.firebaseapp.com",
  projectId: "bookshop-a1201",
  storageBucket: "bookshop-a1201.appspot.com",
  messagingSenderId: "277779409175",
  appId: "1:277779409175:web:2ceb6621e58cf4b76b6f52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
