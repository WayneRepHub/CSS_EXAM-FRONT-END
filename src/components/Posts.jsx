import React from "react";

{
  /* The card structure and its contents in the 'Latest Posts' component */
}
function Posts(props) {
  return (
    <div>
      <div className="card">
        <img
          className="product--image"
          src="images/img-9.png"
          alt="studyImage"
        />

        {/* Assigning props to items from postData */}
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default Posts;
