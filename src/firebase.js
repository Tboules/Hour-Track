import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDu-e6zhmSHFDgYg40kBACrLBrqfmfDRR0",
  authDomain: "hour-tracker-d3467.firebaseapp.com",
  databaseURL: "https://hour-tracker-d3467.firebaseio.com",
  projectId: "hour-tracker-d3467",
  storageBucket: "hour-tracker-d3467.appspot.com",
  messagingSenderId: "437570254456",
  appId: "1:437570254456:web:2f0565d52315c9f0395f8d",
  measurementId: "G-GYGGX2T6GV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
