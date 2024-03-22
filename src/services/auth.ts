// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0vyRcAv1sxQg40rNxxZVD3ARQvbtd5H0',
  authDomain: "pokemon-location-417923.firebaseapp.com",
  projectId: "pokemon-location-417923",
  storageBucket: "pokemon-location-417923.appspot.com",
  messagingSenderId: "816258522777",
  appId: "1:816258522777:web:cbc8885b39178fb029e208",
  measurementId:  "G-Y6NEF1CXCP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
