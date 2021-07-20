/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
function Package(props) {
  return (
    <>
      <div className="container package ">
        <div className="row ">
          <div className="col-md-3">
            <div className="title">
              <div className="row">
                <div className="col-md icon">{props.icon}</div>
                <div className="col-md">
                  <h1>{props.title}</h1>
                  <p>{props.intro}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="disc">
              <p>{props.disc}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="price">
              <Button className="price-btn">Purchase for ${props.price}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
