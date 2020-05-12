import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import "./chart.css";

const Chart = props => {
  let active = props.case - (props.recovered + props.death);
  const globalData = {
    labels: ["Active", "Recovered", "Death"],
    datasets: [
      {
        data: [active, props.recovered, props.death],
        backgroundColor: ["#367AE7", "#97B1F1", "#f28846"],
        hoverBackgroundColor: ["#8f38e0","#55c69d","#ea4d5d",]
      }
    ]
  };

  const bdData = {
    labels: ["Active", "Recovered", "Death"],
    datasets: [
      {
        data: [props.bdActive, props.bdRecover, props.bdDeath],
        backgroundColor: ["#367AE7", "#97B1F1", "#f28846"],
        hoverBackgroundColor: ["#8f38e0","#55c69d","#ea4d5d",]
      }
    ]
  };
  return (
    <div className="chart-container">
      <div className="global-chart">
        <p style={{ textAlign: "center" }}>
          <span className="chart-tag">Bangladeshi Data</span>
        </p>
        <Doughnut
          data={bdData}
          options={{ responsive: true }}
          height="150"
        />{" "}
      </div>
      <div className="global-chart">
        {" "}
        <p style={{ textAlign: "center" }}>
          <span className="chart-tag">Global Data</span>
        </p>
        <Pie data={globalData} options={{ responsive: true }} height="150" />{" "}
      </div>
    </div>
  );
};

export default Chart;
