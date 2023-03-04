import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';


// axios.defaults.baseURL = 'https://0.0.0.0:5005'
const tokenId = window.localStorage.getItem('Token')
axios.defaults.headers.common['x-access-tokens'] = tokenId
console.log("TOKEN", tokenId)

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
