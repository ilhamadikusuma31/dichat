import logo from './logo.svg';
import './App.css';

//baru
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";



firebase.initializeApp({
  //config
  apiKey: "AIzaSyAZgjRNEVX-Ngj-90BSOGnOpkNShijnMHc",
  authDomain: "dichat-1fbc5.firebaseapp.com",
  projectId: "dichat-1fbc5",
  storageBucket: "dichat-1fbc5.appspot.com",
  messagingSenderId: "760187193193",
  appId: "1:760187193193:web:91f19192fc71c136459ff8",
  measurementId: "G-S3PY1MJJW0"
})

const auth = firebase.auth();
const firestore = firebase.firestore();




function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
