/** @format */

import React from "react";
import PricingHeading from "./PricingHeading";
import Package from "./Package";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LanguageIcon from "@material-ui/icons/Language";
import DashboardIcon from "@material-ui/icons/Dashboard";
function Pricing() {
  return (
    <>
      <PricingHeading />
      <div className="container packages">
        <div className="row">
          <div className="col">
            <Package
              icon={<AcUnitIcon fontSize="large" />}
              title="Standard"
              intro="Single site"
              disc="Ideal for corporate, portfolio, blog, shop and many more."
              price="49"
            />
            <Package
              icon={<DashboardIcon fontSize="large" />}
              title="Multisite"
              intro="Unlimited sites"
              disc="All the same examples as the Standard License, but you could build all of them with a single Multisite license."
              price="149"
            />
            <Package
              icon={<LanguageIcon fontSize="large" />}
              title="Extended"
              intro="For paying users"
              disc="Best suited for paid subscribers and SaaS analytics applications."
              price="599"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
