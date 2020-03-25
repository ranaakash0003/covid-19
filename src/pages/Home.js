import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import moment from "moment";
import Chart from "../components/chart/Chart";
import spinner from "../assets/spinner.gif";
import Header from "../components/header/header";
import Datatable from "../components/datatable/Datatable";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [affected, setAffected] = useState(0);
  const [confirmed, setConfirmedCount] = useState(0);
  const [recoverCount, setrecoverCount] = useState(0);
  const [deathCount, setdeathCount] = useState(0);
  const [updateDate, setUpdateDate] = useState(
    moment().format("Do MMMM YYYY, h:mm:ss a")
  );
  const [bdActive, setBdActive] = useState(0);
  const [bdRecoverCount, setBdRrecoverCount] = useState(0);
  const [bdDeathCount, setBdDeathCount] = useState(0);

  useEffect(() => {
    getCoronaData();
    getBdData();
    let timerId = setInterval(() => {
      getCoronaData();
      getBdData();
      setUpdateDate(moment().format("Do MMMM YYYY, h:mm:ss a"));
    }, 10000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  async function getCoronaData() {
    // let nf = new Intl.NumberFormat();
    const res = await axios("https://corona.lmao.ninja/all");
    setConfirmedCount(res.data.cases);
    setrecoverCount(res.data.recovered);
    setdeathCount(res.data.deaths);
    // setConfirmedCount(nf.format(res.data.cases));
    // setrecoverCount(nf.format(res.data.recovered));
    // setdeathCount(nf.format(res.data.deaths));
    const response = await axios("https://corona.lmao.ninja/countries");
    // setAffected(nf.format(response.data.length));
    setAffected(response.data.length);
  }

  async function getBdData() {
    const res = await axios.get(
      "https://corona.lmao.ninja/countries/bangladesh"
    );
    setBdActive(res.data.active);
    setBdRrecoverCount(res.data.recovered);
    setBdDeathCount(res.data.deaths);
  }

  return (
    <div className="home-container">
      <Header />
      {confirmed != 0 ? (
        <>
          <div className="section-title">
            <span className="updated-tag">UPDATED</span>
            <p>
              <span>&nbsp; {updateDate}</span>
            </p>
          </div>
          <div className="count-chart">
            <div className="data-container">
              <div className="section-container">
                <h2 style={{ color: "rgb(108, 121, 132)" }}>{affected}</h2>
                <p>
                  <span className="affected">COUNTRY</span>
                </p>
              </div>
              <div className="section-container">
                <h2 style={{ color: "rgb(201, 147, 49)" }}>{confirmed}</h2>
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
            <Chart
              case={confirmed}
              death={deathCount}
              recovered={recoverCount}
              bdActive={bdActive}
              bdDeath={bdDeathCount}
              bdRecover={bdRecoverCount}
            />{" "}
          </div>
        </>
      ) : (
        <div>
          <img className="spinner" src={spinner} alt="...loading" />
        </div>
      )}
      <Datatable />
      <Footer />
    </div>
  );
};

export default Home;
