import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const FIREBASE_CONFIG = {
   apiKey: "AIzaSyA1Lxpb4mGU9UoXjoxRu5gf8Vz0niRMh6A",
   authDomain: "website-esteban.firebaseapp.com",
   databaseURL: "https://website-esteban.firebaseio.com",
   projectId: "website-esteban",
   storageBucket: "",
   messagingSenderId: "932584125067"
}

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export const database = firestore

export const storage = firebase.storage()
