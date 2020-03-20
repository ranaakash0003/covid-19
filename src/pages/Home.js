import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [confimedCount, setConfirmedCount] = useState(0);
  const [recoverCount, setrecoverCount] = useState(0);
  const [deathCount, setdeathCount] = useState(0);
  let today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    getCoronaData();
    let timerId = setInterval(() => {
      getCoronaData();
    }, 10000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  async function getCoronaData() {
    const res = await axios("https://corona.lmao.ninja/all");
    setConfirmedCount(res.data.cases);
    setrecoverCount(res.data.recovered);
    setdeathCount(res.data.deaths);
  }

  return (
    <div className="home-container">
      <div className="section-title">
        <p>
          <span>Last Updated: &nbsp; {today}</span>
        </p>
      </div>
      <div className="data-container">
        <div className="section-container">
          <h2 style={{ color: "rgb(201, 147, 49)" }}>{confimedCount}</h2>
          <span className="confirmed">CONFIRMED</span>
        </div>
        <div className="section-container">
          <h2 style={{ color: "rgb(60, 175, 89)" }}>{recoverCount}</h2>
          <span className="recovery">RECOVERED</span>
        </div>
        <div className="section-container">
          <h2 style={{ color: "rgb(219, 61, 33)" }}>{deathCount}</h2>
          <span className="death">DEATH</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
