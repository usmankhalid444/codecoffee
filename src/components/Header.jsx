/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-2 logo">CodendCoffee</div>
            <div className="col-md-8  navlinks">
              <ul>
                <li>
                  <a href="/">Landings</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                </li>
                <li>
                  <a href="/">Blogs</a>
                </li>
                <li>
                  <a href="/">Shop</a>
                </li>
                <li>
                  <a href="/">Demos</a>
                </li>
                <li>
                  <a href="/">Docs</a>
                </li>
                <li>
                  <a href="/">
                    <Button className="def-btn" variant="contained">
                      Buy Now
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="toogle-btn col-8 ">
              <Button>
                <DehazeIcon fontSize="large" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
