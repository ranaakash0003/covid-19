import React from "react";
import "./hospital.css";
import MapContainer from "../../components/map/MapContainer";
import HospitalList from "../../components/HospitalList/HospitalList";
import Header from "../../components/header/header";

const Hospital = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="hospitals-container">
        <div className="hospital-data-view">
          <HospitalList />
        </div>
        <div className="map-view">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default Hospital;
