import React, { useState, useEffect } from "react";

function App() {
  const [separationStatus, setSeparationStatus] = useState("Pending"); //pending sir
  const [healthData, setHealthData] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/health")
      .then(response => response.json())
      .then(data => setHealthData(data)); //collecting the data
    }
  }
}
