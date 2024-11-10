
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB7PTviDkyhyvQcfipcAXFKulYGApa7Ls",
  authDomain: "nehuen-fe076.firebaseapp.com",
  databaseURL: "https://nehuen-fe076-default-rtdb.firebaseio.com",
  projectId: "nehuen-fe076",
  storageBucket: "nehuen-fe076.firebasestorage.app",
  messagingSenderId: "274809101172",
  appId: "1:274809101172:web:0b7e012baf2cc4e100ea21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db;