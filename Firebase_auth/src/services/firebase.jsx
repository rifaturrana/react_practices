import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvwefFahFeQb_NacEcL3VcEYEN8-K7H5A",
  authDomain: "react-auth-be6a8.firebaseapp.com",
  projectId: "react-auth-be6a8",
  storageBucket: "react-auth-be6a8.appspot.com",
  messagingSenderId: "250495150922",
  appId: "1:250495150922:web:01eae3eaa34d2853aeafb3",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
