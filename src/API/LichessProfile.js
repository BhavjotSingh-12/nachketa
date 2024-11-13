// src/LichessProfile.js
import React, { useState } from 'react';
import axios from 'axios';

function LichessProfile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfile(response.data);
      setError(null);
    } catch (err) {
      setProfile(null);
      setError('User not found or an error occurred');
    }
  };

  return (
    <div className='mt-5 pd-3 flex justify-center items-center flex-col ' >
      <h2>Lichess Profile</h2>
      <div className='w-20 flex justify-center items-center flex-col border-black '>

        <input
          className='border-black'
          type="text"
          placeholder="Enter Lichess username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={fetchProfile}>Fetch Profile</button>

      {error && <p>{error}</p>}

      {profile && (
        <div>
          <h3>{profile.username}</h3>
          <img src={profile.profile?.avatar || 'https://placehold.co/100'} alt="Profile" />
          <p>Bio: {profile.profile?.bio || 'No bio available'}</p>
          <p>Number of Games Played: {profile.count?.all}</p>
          <p>Ratings:</p>
          <ul>
            <li>Bullet: {profile.perfs?.bullet?.rating || 'N/A'}</li>
            <li>Blitz: {profile.perfs?.blitz?.rating || 'N/A'}</li>
            <li>Rapid: {profile.perfs?.rapid?.rating || 'N/A'}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LichessProfile;
