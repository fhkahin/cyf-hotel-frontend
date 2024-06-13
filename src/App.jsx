import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Provide the complete API URL or set the baseURL for Axios
        const response = await axios.get('https://your-api-domain.com/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error.message); // Log a more user-friendly error message
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="app">
      <h1>CYF Hotel</h1>
      <h2>Rooms</h2>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={`${room.room_no}-${room.room_type}`} className="room-item">
            <h3>Room No: {room.room_no}</h3>
            <p>Type: {room.room_type}</p>
            <p>Rate: {room.rate}</p>
          </li>n
        ))}
      </ul>
    </div>
  );
};

export default App;