import Profile from './Pages/profile/Profile'
import Login from './Components/login/login'
import Register from './Components/register/register'
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
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
