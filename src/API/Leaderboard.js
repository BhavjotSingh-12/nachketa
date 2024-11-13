// src/Leaderboard.js
import React from 'react';

function Leaderboard() {
  
  const users = [
    { username: 'Player1', bio: 'Chess Enthusiast', gamesPlayed: 100, ratings: 2500, profileImage: 'https://placehold.co/100' },
    { username: 'Player2', bio: 'Strategist', gamesPlayed: 150, ratings: 2700, profileImage: 'https://placehold.co/100' },
    { username: 'Player3', bio: 'Tactician', gamesPlayed: 200, ratings: 2600, profileImage: 'https://placehold.co/100' },
    { username: 'Player4', bio: 'The Rookie', gamesPlayed: 50, ratings: 2200, profileImage: 'https://placehold.co/100' },
    { username: 'Player5', bio: 'Chess Prodigy', gamesPlayed: 300, ratings: 2800, profileImage: 'https://placehold.co/100' },
  ];

  // Sort users by ratings in descending order
  const sortedUsers = users.sort((a, b) => b.ratings - a.ratings);

  return (
    <div className='mt-5 pd-3 flex justify-center items-center flex-col'>
      <h2 className='' >Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rank</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Profile Image</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Username</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bio</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Games Played</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.username}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={user.profileImage} alt={`${user.username}'s profile`} style={{ width: '50px', borderRadius: '50%' }} />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.username}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.bio}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.gamesPlayed}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
