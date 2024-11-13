import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OngoingTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/tournament');
        
        // Ensure that tournaments is an array
        const tournamentList = Array.isArray(response.data) ? response.data : [];
        
        setTournaments(tournamentList);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tournaments');
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) return <p>Loading ongoing tournaments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Ongoing Tournaments</h2>
      {tournaments.length === 0 ? (
        <p>No ongoing tournaments at the moment.</p>
      ) : (
        <ul>
          {tournaments.map((tournament) => (
            <li key={tournament.id} style={{ marginBottom: '20px', listStyle: 'none', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
              <h3>{tournament.fullName}</h3>
              <p><strong>Created by:</strong> {tournament.createdBy}</p>
              <p><strong>Starts at:</strong> {new Date(tournament.startsAt).toLocaleString()}</p>
              <p><strong>Clock:</strong> {tournament.clock.limit / 60} mins + {tournament.clock.increment} secs</p>
              <p><strong>Status:</strong> {tournament.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OngoingTournaments;
