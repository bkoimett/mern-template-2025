import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserDetails from './Components/Auth/UserDetails';
import LandingPage from './Components/Auth/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userDetails" element={<UserDetails />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
