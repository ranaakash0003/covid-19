import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Datatable from "./components/datatable/Datatable";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Datatable />
      <Footer />
    </div>
  );
}

export default App;
