/** @format */

import React from "react";
import Card from "./Card";
import c1 from "./imgs/c1.svg";
import c2 from "./imgs/c2.svg";
import c3 from "./imgs/c3.svg";

function Cards() {
  return (
    <>
      <div className="container cards">
        <div className="row">
          <div className="col-md-4">
            <Card bgcolor="#377DFF" svg={c1} />
          </div>
          <div className="col-md-4">
            <Card bgcolor="#21325B" svg={c2} />
          </div>
          <div className="col-md-4">
            <Card bgcolor="#F5CA99" svg={c3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
