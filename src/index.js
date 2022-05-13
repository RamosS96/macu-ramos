import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBVA0d5eVRdLbiZ73c9rnVvdzxedAw7v4",
  authDomain: "macu-app-sr.firebaseapp.com",
  projectId: "macu-app-sr",
  storageBucket: "macu-app-sr.appspot.com",
  messagingSenderId: "1042740416483",
  appId: "1:1042740416483:web:d848412c2b6da7b63a1ad6",
  measurementId: "G-PXBC978P1D"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
