import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
