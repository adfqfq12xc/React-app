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
import { Autcontext } from './context/authcontext';
//<Route path="/" element={user ? <Home /> : <Login/>} />
export default function App() {
  const {user}=useContext(Autcontext)

  return (

    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
