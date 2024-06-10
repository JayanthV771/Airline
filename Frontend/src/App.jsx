import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [airports, setAirports] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const fetchAirports = async () => {
      const res = await axios.get('http://localhost:5555/airports');
      setAirports(res.data);
    };
    fetchAirports();
  }, []);

  const findRoute = async () => {
    const res = await axios.post('http://localhost:5555/shortest-route', { start, end });
    setRoute(res.data.route);
  };

  return (
    <div className="App">
      <h1>Air Route Optimization</h1>
      <div>
        <label>Start Airport: </label>
        <select onChange={(e) => setStart(e.target.value)}>
          <option>Select an airport</option>
          {airports.map(airport => (
            <option key={airport.IATA} value={airport.IATA}>{airport.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>End Airport: </label>
        <select onChange={(e) => setEnd(e.target.value)}>
          <option>Select an airport</option>
          {airports.map(airport => (
            <option key={airport.IATA} value={airport.IATA}>{airport.name}</option>
          ))}
        </select>
      </div>
      <button onClick={findRoute}>Find Shortest Route</button>
      {route && (
        <div>
          <h2>Shortest Route</h2>
          <ul>
            {route.map((airport, index) => (
              // <li key={index}>{airport}</li>
              console.log(airport)
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
