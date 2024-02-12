import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Authcontextprovider } from './context/authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Authcontextprovider>
      <App />
      </Authcontextprovider>
);
