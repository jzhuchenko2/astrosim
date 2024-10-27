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
    ) //return the app on the web
}
