import React from "react";
import CardItem from "./CardItem";
import "./Cards.scss";

function Tracks() {
  return (
    <div className="cards" id="track">
      {/* Tracks Section */}
      <div className="tracks">
        <h3>Tracks</h3>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items tracks-btns">
              <div>
                {/* Cards of Data Science, Core Science and Game Dev respectively */}
                <CardItem
                  src="images/img-1.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
                  label="Data Science"
                  path="/"
                />
              </div>
              <div>
                <CardItem
                  src="images/img-2.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus "
                  label="Core Science"
                  path="/"
                />
              </div>
              <div>
                <CardItem
                  src="images/img-3.jpeg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
                  label="Game Development"
                  path="/"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracks;
