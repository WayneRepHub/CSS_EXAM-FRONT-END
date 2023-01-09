import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Latest.scss";
import { postData, responsive } from "./Post-data";
import Posts from "./Posts";

function Latest() {
  {
    /* mapping the card's contents from Post-Data.js */
  }
  const post = postData.map((item) => (
    <Posts name={item.name} url={item.imageurl} date={item.date} />
  ));

  return (
    //returns the 'Latest' section component
    <div className="latest" id="latest">
      <h3>Latest Posts</h3>
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={10000}
      >
        {post}
      </Carousel>
      ;
    </div>
  );
}

export default Latest;
