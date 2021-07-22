/** @format */

import React from "react";
import PortfolioHeading from "./PorfolioHeading";
import PortfolioNavigation from "./PortfolioNavigation";
import Project from "./Project";
import p1 from "./imgs/p1.jpg";
import p2 from "./imgs/p2.jpg";
import p3 from "./imgs/p3.jpg";
import p4 from "./imgs/p4.jpg";
import p5 from "./imgs/p5.jpg";
import p6 from "./imgs/p6.jpg";
import p7 from "./imgs/p7.jpg";
import p8 from "./imgs/p8.jpg";
import p9 from "./imgs/p9.jpg";
function Portfolio() {
  return (
    <>
      <div className="container-fluid portfolio">
        <div className="row">
          <div className="col-12 p-heading">
            <PortfolioHeading />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <PortfolioNavigation />
          </div>
          <div className="col-9 projects">
            <div className="row gy-4">
              <div className="col-md-4">
                <Project img={p1} />
              </div>
              <div className="col-md-4">
                <Project img={p2} />
              </div>
              <div className="col-md-4">
                <Project img={p3} />
              </div>
              <div className="col-md-4">
                <Project img={p4} />
              </div>
              <div className="col-md-4">
                <Project img={p5} />
              </div>
              <div className="col-md-4">
                <Project img={p6} />
              </div>
              <div className="col-md-4">
                <Project img={p7} />
              </div>
              <div className="col-md-4">
                <Project img={p8} />
              </div>
              <div className="col-md-4">
                <Project img={p9} />
              </div>
              <div className="col-md-4">
                <Project img={p1} />
              </div>
              <div className="col-md-4">
                <Project img={p2} />
              </div>
              <div className="col-md-4">
                <Project img={p3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
