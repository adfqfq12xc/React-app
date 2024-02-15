import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import App from './App';
import './index.css';
import { UserContext } from "./UserContext";

const Root = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />

    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
