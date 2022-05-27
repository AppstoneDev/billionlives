import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConditionalRendering from "./components/conditionalRendering";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConditionalRendering />
  </React.StrictMode>
);
//ASSIGNMENT 1:
//part 1: Create an input. Type in a color and it should change the background color of a div directly
//part 2: the color of the div should change only when a button is clicked.

//ASSIGNMENT 2: 
//part 1: calculate the duration between a component mount and unmount. 
//part 2: change the color of a div to what the user enters in an input. The change should happen on click of the div. 


reportWebVitals();
