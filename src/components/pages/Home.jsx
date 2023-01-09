import "../../App.scss";
import Tagline from "../Tagline.jsx";
import React from "react";
import Tracks from "../Tracks";
import Subjects from "../Subjects";
import Latest from "../Latest";

//Home page
function Home() {
  return (
    <>
      {/* Components with Dividers */}
      <Tagline />

      <div className="rectangle"></div>

      <Tracks />

      <div className="rectangle"></div>

      <Subjects />

      <div className="rectangle-a"></div>

      <Latest />
    </>
  );
}

export default Home;
