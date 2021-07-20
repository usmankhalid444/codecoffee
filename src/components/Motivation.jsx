/** @format */

import React from "react";
import Button from "@material-ui/core/Button";

function Motivation() {
  return (
    <>
      <div className="container-fluid motivation">
        <div className="row">
          <div className="col-md-6 text">
            <h1>
              Turn your ideas into a
              <span style={{ color: "#377dff" }}> Future.</span>
            </h1>
            <p>
              Front's feature-rich designed demo pages help you create the best
              possible product.
            </p>
            <Button className="def-btn" variant="contained">
              Get Started
            </Button>
            <Button className="learnmore-btn">Learn More</Button>
          </div>
          <div className="col-md-6  image"></div>
        </div>
      </div>
    </>
  );
}

export default Motivation;
