import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth'

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDABFLp-Tqx9wEulBMsWB916_nIPkk52jI",
  authDomain: "unitedawgs.firebaseapp.com",
  projectId: "unitedawgs",
  storageBucket: "unitedawgs.appspot.com",
  messagingSenderId: "676725061039",
  appId: "1:676725061039:web:a726de66280a9138226b5a"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
