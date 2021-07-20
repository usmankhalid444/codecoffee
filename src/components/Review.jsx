/** @format */

import React from "react";
import ClientImg from "../imgs/client-img.jpg";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
function Review() {
  return (
    <>
      <div className="container review">
        <div className="row">
          <div className="col-md-3 client-img">
            <img src={ClientImg} alt="client-img" width="100%" />
          </div>
          <div className="col-md-6 client-comment">
            <p>
              <FormatQuoteIcon fontSize="large" className="quote" />
              <br />
              I'm absolutely floored by the level of care and attention to
              detail the team at Htmlstream have put into this theme and for one
              can guarantee that I will be a return customer.
            </p>
            <p>
              Lewis{" "}
              <span style={{ color: "gray", fontSize: "1rem" }}>
                — happy customer
              </span>{" "}
            </p>
          </div>
          <div className="col-md-3 case-studies">
            <h1>3,500+</h1>
            <p>
              Leaders use Front to build a startup, ecommerce, portfolio and
              many more websites.
            </p>
            <a href="/">Read the case studies </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
