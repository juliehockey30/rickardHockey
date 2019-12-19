import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB_kXf9fCyEmTGdjRbvCx9J7HRRsmdTq04",
  authDomain: "rickard-hockey.firebaseapp.com",
  databaseURL: "https://rickard-hockey.firebaseio.com",
  projectId: "rickard-hockey",
  storageBucket: "rickard-hockey.appspot.com",
  messagingSenderId: "1088473663003",
  appId: "1:1088473663003:web:a935813cce98bac7a59abe",
  measurementId: "G-TM8YFHR4VF"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
