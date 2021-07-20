/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
function Card(props) {
  return (
    <>
      <div className="card" style={{ backgroundColor: props.bgcolor }}>
        <div className="name">Documentation</div>
        <div className="detail">
          Discover how to build and maintain coding system using our
          Documentation
        </div>
        <img src={props.svg} alt="png" />
        <Button className="learnmore-btn">Learn More </Button>
      </div>
    </>
  );
}

export default Card;
