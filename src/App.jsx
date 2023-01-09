import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* sets front slash as path to home */}
          <Route path="/" element={<Home />} />
        </Routes>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
