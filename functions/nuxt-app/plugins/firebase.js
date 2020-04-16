import firebase from "firebase";

// .env に設定した値を取得してる
const config = {
  apiKey: "AIzaSyDasuBnZlxcMgHJ5nNSR6-cG5Mzl3hj1_Q",
  authDomain: "gccfitness.firebaseapp.com",
  databaseURL: "https://gccfitness.firebaseio.com",
  projectId: "gccfitness",
  storageBucket: "gccfitness.appspot.com",
  messagingSenderId: "346527701175",
  appId: "1:346527701175:web:877ef3530327f272dc5532",
  measurementId: "G-QRTGKQQJ41"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
