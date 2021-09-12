import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlaDZn3Sf-MywiNDfwVJPE2fk8SQK0lcs",
  authDomain: "login-57f5e.firebaseapp.com",
  projectId: "login-57f5e",
  storageBucket: "login-57f5e.appspot.com",
  messagingSenderId: "672300422975",
  appId: "1:672300422975:web:f3e8f3fdda28dea458a58a",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
