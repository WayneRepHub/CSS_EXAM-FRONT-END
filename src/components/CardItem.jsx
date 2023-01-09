import React from "react";
import { Link } from "react-router-dom";
import { Buttons } from "./Button";
import "./Cards.scss";

function CardItem(props) {
  return (
    <>
      {/* card image */}
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img
              src={props.src}
              alt="StudyImage"
              className="cards__item__img"
            />
          </figure>

          {/* card text contents */}
          <div className="cards__item__info">
            <h5>{props.label}</h5>
            <b2 className="cards__item__text">{props.text}</b2>
            <div className="cards__item_btns">
              {/* card button */}
              <Buttons
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
                Learn More
              </Buttons>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
