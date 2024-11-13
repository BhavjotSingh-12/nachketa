import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LichessProfile from "./API/LichessProfile";
import Leaderboard from './API/Leaderboard';
import OngoingTournaments from './API/OngoingTournaments';

function App() {
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/tournaments">Tournament</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/profile" element={<LichessProfile />} />
        <Route path="/tournaments" element={<OngoingTournaments />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* <Route path="/" element={<LichessProfile />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
