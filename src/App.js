import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hospital from "./pages/Hospitals/Hospital";
import MapContainer from './components/map/MapContainer'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<MapContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
