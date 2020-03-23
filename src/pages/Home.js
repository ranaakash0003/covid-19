import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import moment from "moment";

const Home = () => {
  const [affected, setAffected] = useState(0);
  const [confimedCount, setConfirmedCount] = useState(0);
  const [recoverCount, setrecoverCount] = useState(0);
  const [deathCount, setdeathCount] = useState(0);
  const [updateDate, setUpdateDate] = useState(
    moment().format("Do MMMM YYYY, h:mm:ss a")
  );

  useEffect(() => {
    getCoronaData();
    let timerId = setInterval(() => {
      getCoronaData();
      setUpdateDate(moment().format("Do MMMM YYYY, h:mm:ss a"));
    }, 10000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  async function getCoronaData() {
    let nf = new Intl.NumberFormat();
    const res = await axios("https://corona.lmao.ninja/all");
    setConfirmedCount(nf.format(res.data.cases));
    setrecoverCount(nf.format(res.data.recovered));
    setdeathCount(nf.format(res.data.deaths));
    const response = await axios("https://corona.lmao.ninja/countries");
    setAffected(nf.format(response.data.length));
  }

  return (
    <div className="home-container">
      <div className="section-title">
      <span className="updated-tag">UPDATED</span>
        <p>
          <span>&nbsp; {updateDate}</span>
        </p>
      </div>
      <div className="data-container">
        <div className="section-container">
          <h2 style={{ color: "rgb(108, 121, 132)" }}>{affected}</h2>
          <p>
            <span className="affected">COUNTRY</span>
          </p>
        </div>
        <div className="section-container">
          <h2 style={{ color: "rgb(201, 147, 49)" }}>{confimedCount}</h2>
          <p>
            <span className="confirmed">CONFIRMED</span>
          </p>
        </div>
        <div className="section-container">
          <h2 style={{ color: "rgb(60, 175, 89)" }}>{recoverCount}</h2>
          <p>
            <span className="recovery">RECOVERED</span>
          </p>
        </div>
        <div className="section-container">
          <h2 style={{ color: "rgb(219, 61, 33)" }}>{deathCount}</h2>
          <p>
            <span className="death">DEATH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
