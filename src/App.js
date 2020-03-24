import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Datatable from "./components/datatable/Datatable";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app-container">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://recovid.netlify.com/" />
      </Helmet>
      <Header />
      <Home />
      <Datatable />
      <Footer />
    </div>
  );
}

export default App;
