import React from "react";
import "./hospitalList.css";

const HospitalList = () => {
  return (
    <div className="hospital-list-container">
      <div className="hos-card">
        <div className="hos-title">
          <p>Inner Card title</p>
          <a href="">More</a>
        </div>
        <div className="hos-content">
          <p>Inner Card content</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
