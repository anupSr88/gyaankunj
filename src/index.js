import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';


// axios.defaults.baseURL = 'https://0.0.0.0:5005'
axios.defaults.headers.common['x-access-tokens'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOiI2Zjc1MmQ4Ni02MDY2LTQyMDEtOWEwZi0wMDlkNTc4OWQxNWMiLCJleHAiOjE2Nzk1ODQyNTN9.6gWcYxsoXuAZH-8MELq1TrYBMcjtHgHf8Gz49BMs_NY'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
