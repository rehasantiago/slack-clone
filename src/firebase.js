import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1U9a-7R-tNPqrIdwZu7GSdJ22yVTgX2I",
    authDomain: "slack-clone-4107c.firebaseapp.com",
    databaseURL: "https://slack-clone-4107c.firebaseio.com",
    projectId: "slack-clone-4107c",
    storageBucket: "slack-clone-4107c.appspot.com",
    messagingSenderId: "249771770513",
    appId: "1:249771770513:web:bf1b19bea6edcf753a7530",
    measurementId: "G-VCJM1HG8VL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
