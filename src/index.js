import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Akash from './components/App';
import reportWebVitals from './reportWebVitals';
import StateVars from "./components/stateVars";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateVars />
  </React.StrictMode>
);
//ASSIGNMENT 1:
//part 1: Create an input. Type in a color and it should change the background color of a div directly
//part2: the color of the div should change only when a button is clicked.

reportWebVitals();
