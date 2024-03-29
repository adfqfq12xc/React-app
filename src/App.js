import Profile from './Pages/profile/Profile'
import Login from './Components/login/login'
import Register from './Components/register/register'
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "./UserContext";

export default function App() {
  const { user } = useContext(UserContext);
  



  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />    
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
