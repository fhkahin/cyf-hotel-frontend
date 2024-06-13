// cyf-hotel-frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>CYF Hotel</h1>
      <h2>Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.room_no}>
            Room No: {room.room_no}, Type: {room.room_type}, Rate: {room.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
