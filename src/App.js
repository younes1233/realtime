import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import LeafletMap from './components/RadarCharts';
function App() {
  const [gpsData, setGPSData] = useState({
    temp: "0",
    hum: "0",
    pr: "0",
    prs: "0"
  });

  useEffect(() => {
    const socket = io('https://websocket-hihy.onrender.com'); // Replace with your WebSocket server address
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
    socket.on('newMessage', (data) => {
      console.log('Received new message:', data);
      setGPSData(data); // Update state with received data
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time GPS Data</h1>
        <div className="data-container">
          <div className="data-item">
            <span className="data-label">Temperature:</span>
            <span className="data-value">{gpsData.temp} °C</span>
          </div>
          <div className="data-item">
            <span className="data-label">Humidity:</span>
            <span className="data-value">{gpsData.hum} %</span>
          </div>
          <div className="data-item">
            <span className="data-label">Pressure:</span>
            <span className="data-value">{gpsData.pr} hPa</span>
          </div>
          <div className="data-item">
            <span className="data-label">Pressure State:</span>
            <span className="data-value">{gpsData.prs}</span>
          </div>
        </div>
        <LeafletMap />
      </header>
    </div>
  );
}

export default App;
