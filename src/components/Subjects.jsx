import React from "react";
import "./Subjects.scss";
import CardItem from "./CardItem";
import { useState } from "react";
import { Buttons } from "./Button";

function Subjects() {
  {
    /* set data science courses as default */
  }
  const [active, setActive] = useState("DataScience");

  {
    /* assigning the button's state whether it is active */
  }
  const [btnState, setBtnState] = useState(false);

  {
    /* shows the respective courses on click */
  }
  const datasci = () => {
    setBtnState(!btnState);
    setActive("DataScience");
  };
  const coresci = () => {
    setBtnState(!btnState);
    setActive("CoreScience");
  };
  const gamedev = () => {
    setBtnState(!btnState);
    setActive("GameDevelopment");
  };

  return (
    <div className="cards" id="subject">
      {/* returns the Subjects Section */}.
      <div className="subjects">
        <h3>Subjects</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit sed do
          eiusmod tempor incididunt ut
        </h6>

        {/* Three buttons which shows their respective courses 
        (only one button can be selected at a time) */}
        <div className="subjects-btns">
          <Buttons
            onClick={datasci}
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            Data Sciences
          </Buttons>

          <Buttons
            onClick={coresci}
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            Core Sciences
          </Buttons>

          <Buttons
            onClick={gamedev}
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            Game Development
          </Buttons>
        </div>

        {/* Component Cards */}
        <div className="cards">
          <div className="subjects">
            <div className="cards__container">
              <div className="cards__wrapper">
                {/* First row */}
                <ul className="cards__items tracks-btns">
                  <div>
                    {/*Courses for Data Science (A.K.A just ELEC 1C)*/}

                    {/* DS Card no. 1*/}
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="data warehousing"
                        label="cs elec 1c"
                        path="/"
                      />
                    )}
                  </div>

                  {/* DS Card no. 2*/}
                  <div>
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="machine learning"
                        label="cs elec 2c"
                        path="/"
                      />
                    )}
                  </div>

                  {/* DS Card no. 3*/}
                  <div>
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="data analysis and visualization"
                        label="cs elec 3c"
                        path="/"
                      />
                    )}
                  </div>

                  <div>
                    {/*Courses for Core Science (A.K.A just (A.K.A Machine Learning)*/}

                    {/* CS Card no. 1*/}
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="advanced intelligent systems"
                        label="cs elec 1a"
                        path="/"
                      />
                    )}
                  </div>

                  {/* CS Card no. 2*/}
                  <div>
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="compiler design"
                        label="cs elec 2c"
                        path="/"
                      />
                    )}
                  </div>

                  {/* CS Card no. 3*/}
                  <div>
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="natural language processing"
                        label="cs elec 3c"
                        path="/"
                      />
                    )}
                  </div>

                  <div>
                    {/*Courses for Game Development (A.K.A Game Programming I)*/}

                    {/* Game Dev Card no. 1*/}
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="game theory and design"
                        label="cs elec 2b"
                        path="/"
                      />
                    )}
                  </div>

                  {/* Game Dev Card no. 2*/}
                  <div>
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="game programming i"
                        label="cs elec 2b"
                        path="/"
                      />
                    )}
                  </div>

                  {/* Game Dev Card no. 3*/}
                  <div>
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="game programming ii"
                        label="cs elec 3b"
                        path="/"
                      />
                    )}
                  </div>
                </ul>

                {/* Second row */}
                <ul className="cards__items tracks-btns">
                  <div>
                    {/*Courses for Data Science (A.K.A just ELEC 1C)*/}

                    {/* DS Card no. 1*/}
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="data mining"
                        label="cs elec 4c"
                        path="/"
                      />
                    )}
                  </div>

                  {/* DS Card no. 2*/}
                  <div>
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="human-computer interaction"
                        label="cs 2612"
                        path="/"
                      />
                    )}
                  </div>

                  {/* DS Card no. 3*/}
                  <div>
                    {active === "DataScience" && (
                      <CardItem
                        src="images/img-1.jpg"
                        text="purposive communication"
                        label="purpcom"
                        path="/"
                      />
                    )}
                  </div>

                  <div>
                    {/*Courses for Core Science (A.K.A just (A.K.A Machine Learning)*/}

                    {/* CS Card no. 1*/}
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="empathic computing"
                        label="cs elec 4c"
                        path="/"
                      />
                    )}
                  </div>

                  {/* CS Card no. 2*/}
                  <div>
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="christian vision of marriage and family"
                        label="thy 2"
                        path="/"
                      />
                    )}
                  </div>

                  {/* CS Card no. 3*/}
                  <div>
                    {active === "CoreScience" && (
                      <CardItem
                        src="images/img-2.jpg"
                        text="logic and circuits design"
                        label="cs 2613"
                        path="/"
                      />
                    )}
                  </div>

                  <div>
                    {/*Courses for Game Development (A.K.A Game Programming I)*/}

                    {/* Game Dev Card no. 1*/}
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="game production"
                        label="cs elec 4b"
                        path="/"
                      />
                    )}
                  </div>

                  {/* Game Dev Card no. 2*/}
                  <div>
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="linear algebra for computing sciences"
                        label="cs 2611"
                        path="/"
                      />
                    )}
                  </div>

                  {/* Game Dev Card no. 3*/}
                  <div>
                    {active === "GameDevelopment" && (
                      <CardItem
                        src="images/img-3.jpeg"
                        text="advanced probability and statistics"
                        label="cs 2617"
                        path="/"
                      />
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
