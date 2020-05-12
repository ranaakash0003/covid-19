import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { useState } from "react";
import "./map.css";
import "antd/dist/antd.css";
import { Card, Alert } from "antd";
import Header from "../header/header";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  BankOutlined
} from "@ant-design/icons";

const mapStyles = {
  width: "50%",
  height: "120%"
};

const MapContainer = props => {
  const [markerList, setMarkerList] = useState([
    {
      name: "Dhaka Medical College",
      location: "ramna, Dhaka",
      seat: "25",
      lat: 23.749997,
      lng: 90.386985
    },
    {
      name: "AsianHospital Pvt. Limited",
      location: "Merul Badda, Dhak",
      seat: "10",
      latitude: 23.754789,
      longitude: 90.430628
    },
    {
      name: "Kurmitola General Hospital",
      location: "Mirpur, Dhaka",
      seat: "30",
      latitude: 23.770421,
      longitude: 90.351612
    },
    {
      name: "Holy Family, Hospital",
      location: "Kawranbazar, Dhaka",
      seat: "3",
      latitude: 23.696721,
      longitude: 90.305676
    },
    {
      name: "Ghulshan Hospital Pvt Limited",
      location: "Ghulshan, Mymensingh",
      seat: "15",
      latitude: 23.64075,
      longitude: 90.26963
    },
    {
      name: "Uttara Specialized Hospital",
      location: "Uttara 12, Dhaka",
      seat: "25",
      latitude: 23.748661,
      longitude: 90.203792
    }
  ]);
  const markerInfo = (store, index) => {
    console.log("SSSSSSSSWW", store.name);
    return (
      <div
        style={{
          background: "black",
          width: "200px",
          display: "bloack",
          margin: "auto"
        }}
      >
        {store.name}
        {store.seat}
      </div>
    );
  };
  const displayMarkers = () => {
    return markerList.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => alert(store.name)} />

          // onClick={
          //   function(store, index){
          //     return (
          //       <div
          //         style={{
          //           background: "blue",
          //           width: "500px",
          //           display: "block",
          //           margin: "auto"
          //         }}
          //       >
          //         {store.name}
          //         {store.seat}
          //       </div>
          //     );
          //   }
          // }
        
      );
    });
  };

  const displayData = () => {
    return markerList.map((store, index) => {
      return (
        <Card
          style={{ margin: "8px 8px" }}
          type="inner"
          title={store.name}
          extra={<a href="#">More</a>}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {" "}
              <BankOutlined style={{ paddingRight: "10px" }} />
              {store.location}
            </div>
            <div>
              <CheckCircleTwoTone
                style={{ paddingRight: "5px" }}
                twoToneColor="#52c41a"
              />
              Seat: &nbsp;
              {store.seat}
            </div>
          </div>
        </Card>
      );
    });
  };
  return (
    <div>
      <Header />
      <div className="hos-view-container">
        <div style={{ width: "50%" }}>{displayData()}</div>
        {/* <div className="map-container"> */}{" "}
        <Map
          google={props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 23.684994, lng: 90.356331 }}
        >
          {displayMarkers()}
        </Map>
        {/* </div> */}
      </div>{" "}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmEkZR_B_BwOAHPg14DHAN_5maT_bjgVs"
})(MapContainer);
