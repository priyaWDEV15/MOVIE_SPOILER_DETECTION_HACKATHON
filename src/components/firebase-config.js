import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig1 = {

  apiKey: "AIzaSyBhhgaPZIt1xNdNG39zsgW_ZVcNmqX8Wsg",

  authDomain: "auth-development-8aa0c.firebaseapp.com",

  databaseURL: "https://auth-development-8aa0c-default-rtdb.firebaseio.com",

  projectId: "auth-development-8aa0c",

  storageBucket: "auth-development-8aa0c.appspot.com",

  messagingSenderId: "969884448302",

  appId: "1:969884448302:web:5d286d0d252825dbb311bf"

};





const ap = initializeApp(firebaseConfig1);

export const db = getFirestore(ap)

