/** @format */

import React from "react";
import CallIcon from "@material-ui/icons/Call";
import RoomIcon from "@material-ui/icons/Room";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FlagIcon from "@material-ui/icons/Flag";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";

function Footer() {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="container footer">
          <div className="row links gy-5 gx-5">
            <div className="col-md-3">
              <ul>
                <li>
                  <h1>CodendCoffee</h1>
                </li>
                <li>
                  <a href="/">
                    <RoomIcon />
                    153 Williamson Plaza, Maggieberg
                  </a>
                </li>
                <li>
                  <a href="/">
                    <CallIcon /> +1 (062) 109-9222
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <ul>
                <li>
                  <h1>Company</h1>
                </li>
                <li>
                  <a href="/"> About</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Customer</a>
                </li>
                <li>
                  <a href="/">Hire us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ">
              <ul>
                <li>
                  <h1>Features</h1>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Release notes</a>
                </li>
                <li>
                  <a href="/">Integration</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li>
                  <h1>Documentation</h1>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Docs</a>
                </li>
                <li>
                  <a href="/">Status</a>
                </li>
                <li>
                  <a href="/">Api Reference</a>
                </li>
                <li>
                  <a href="/">Tech Requirments</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>
                  <h1>Resources</h1>
                </li>
                <li>
                  <a href="/">
                    <HelpOutlineIcon /> Help
                  </a>
                </li>
                <li>
                  <a href="/">
                    <SupervisorAccountIcon /> Your Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row social gy-5">
            <div className="col-md-8">
              <ul>
                <li>
                  <a href="/">Privacy & Policy {""} /</a>
                </li>
                <li>
                  <a href="/">Terms {""} / </a>
                </li>
                <li>
                  <a href="/">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <FacebookIcon className="icon" />
              <InstagramIcon className="icon" />
              <LinkedInIcon className="icon" />
              <TwitterIcon className="icon" />
              <Button>
                <FlagIcon />
                United States <ArrowDropDownIcon />
              </Button>
            </div>
          </div>
          <div className="row info">
            <div className="col-12 ">
              <p>© Front. 2020 CodendCoffee. All rights reserved.</p>
              <p>
                When you visit or interact with our sites, services or tools, we
                or our authorised service providers may use cookies for storing
                information to help provide you with a better, faster and safer
                experience and for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
