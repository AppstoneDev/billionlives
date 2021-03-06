import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from "./components/router";
import Functional from "./components/functional";
import Fetcher from "./components/fetcher";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fetcher origin={"landing_page123"} isLoggedIn={false} acceptedCookies={true} />
  </React.StrictMode>
);

//ASSIGNMENT 1:
//part 1: Create an input. Type in a color and it should change the background color of a div directly
//part 2: the color of the div should change only when a button is clicked.

//ASSIGNMENT 2: 
//part 1: calculate the duration between a component mount and unmount. 
//part 2: change the color of a div to what the user enters in an input. The change should happen on click of the div. 

//ASSIGNMENT 3:
//part 1: use splice to delete a particular user from the list
//part 2: lets create a login form, make an API call and validate if the login was successful.  


//ASSIGNMENT 4: 
//lets continue assignment 3. But now the UI needs to be created using MUI. www.mui.com 

//ASSIGNMENT 5: 
//fetch the list of users from reqres.in using a functional component and check if there 
//is a match by using the some function

reportWebVitals();
