import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDi-1pcF5VuZpXgyE4dCZ0EQJePzPxtYY4",
    authDomain: "myreactchat-34b0b.firebaseapp.com",
    databaseURL: "https://myreactchat-34b0b.firebaseio.com",
    projectId: "myreactchat-34b0b",
    storageBucket: "myreactchat-34b0b.appspot.com",
    messagingSenderId: "70795903413",
    appId: "1:70795903413:web:8af2022019d46a7c31d9fc",
    measurementId: "G-JKQ5NBM9R1"
});

const routing = (
 <Router>
     <div id= 'routing-container'>
         <Route path= '/login' component={LoginComponent}></Route>
         <Route path= '/signup' component={SignupComponent}></Route>
         <Route path= '/dashboard' component={DashboardComponent}></Route> 
     </div>
 </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
