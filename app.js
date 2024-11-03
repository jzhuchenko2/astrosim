import React, { useState, useEffect } from "react";

function App() {
  const [separationStatus, setSeparationStatus] = useState("Pending"); //pending sir
  const [healthData, setHealthData] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/health")
      .then(response => response.json())
      .then(data => setHealthData(data)); //collecting the data
      
      // Simulate separation status (replace this with real data from the backend in future)
      if (Math.random() > 0.9) {
        setSeparationStatus("Successful");
      } else {
        setSeparationStatus("Pending");
      }
    },  1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
    <h1>AstroSplit Dashboard</h1>
  <h2>Payload Separation Status: {separationStatus}</h2>
  <h3>System Health</h3>
  <ul>
        <li>Fuel Level: {healthData.fuel_level ? healthData.fuel_level.toFixed(2) : "Loading..."}%</li>
        <li>Thrust Power: {healthData.thrust_power ? healthData.thrust_power.toFixed(2) : "Loading..."}%</li>
  <li>Battery Status: {healthData.battery_status || "Loading..."}</li>
    
    <li>Temperature: {healthData.temperature ? healthData.temperature.toFixed(1) : "Loading..."}°C</li>
  </ul>
    </div>
    ); //return the app on the web
}
export default App;
