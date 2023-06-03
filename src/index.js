import React from "react"
import ReactDOM from "react-dom/client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"
import App from "./App"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5ZzBeygtvQC2MH8fCv7910cihC5VfaWg",
    authDomain: "rb-materials-jsx2.firebaseapp.com",
    projectId: "rb-materials-jsx2",
    storageBucket: "rb-materials-jsx2.appspot.com",
    messagingSenderId: "160335053111",
    appId: "1:160335053111:web:405b9c2781df2c15389ab2"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)