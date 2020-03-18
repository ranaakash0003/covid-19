import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [confimedCount, setConfirmedCount] = useState(0);
  const [recoverCount, setrecoverCount] = useState(0);
  const [deathCount, setdeathCount] = useState(0);
  useEffect(() => {
    getConfirmedData();
    getRecoverdData();
    getDeathData();
  }, [
    setTimeout(() => {
      window.location.reload();
    }, 10000)
  ]);

  async function getConfirmedData() {
    const res = await axios("https://covid19.mathdro.id/api/");
    setConfirmedCount(res.data.confirmed.value);
  }
  async function getRecoverdData() {
    const res = await axios("https://covid19.mathdro.id/api/");
    setrecoverCount(res.data.recovered.value);
  }
  async function getDeathData() {
    const res = await axios("https://covid19.mathdro.id/api/");
    setdeathCount(res.data.deaths.value);
  }

  return (
    <div>
      <div className="home-container">
        <div className="section-container">
          <h1>{confimedCount}</h1>
          <span className="confirmed">CONFIRMED</span>
        </div>
        <div className="section-container">
          <h1>{recoverCount}</h1>
          <span className="recovery">RECOVERED</span>
        </div>
        <div className="section-container">
          <h1>{deathCount}</h1>
          <span className="death">DEATH</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
