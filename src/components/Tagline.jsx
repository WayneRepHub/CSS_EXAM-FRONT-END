import React from "react";
import { Buttons } from "./Button";
import "./Tagline.scss";
import "../App.scss";

function Tagline() {
  const tracks = () => {
    const element = document.getElementById("track");
    if (element) {
      // 👇 Will scroll smoothly to the top of 'Tracks' section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const subjects = () => {
    const element = document.getElementById("subject");
    if (element) {
      // 👇 Will scroll smoothly to the top of 'Subjects' section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const latests = () => {
    const element = document.getElementById("latest");
    if (element) {
      // 👇 Will scroll smoothly to the top of 'Latest Posts' section
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="tagline-container">
      <h2>
        UST <br /> Computer Science Society
      </h2>
      <p>11111011110</p>

      {/* button for #tracks */}
      <div className="tag-btns">
        <Buttons
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          onClick={tracks}
        >
          #tracks
        </Buttons>

        {/* button for #subjects */}
        <Buttons
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          onClick={subjects}
        >
          #subjects
        </Buttons>

        {/* button for #latestpage */}
        <Buttons
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          onClick={latests}
        >
          #latestpage
        </Buttons>
      </div>
    </div>
  );
}

export default Tagline;
