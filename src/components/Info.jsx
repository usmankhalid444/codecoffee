/** @format */

import React from "react";
import StarIcon from "@material-ui/icons/Star";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AssignmentIcon from "@material-ui/icons/Assignment";
function Info() {
  return (
    <>
      <div className="container info">
        <div className="row gy-5">
          <div className="col-md-4">
            <StarIcon className="icon" />
            <p>
              <b>4.83 out of 5 starts</b> from 53 reviews
            </p>
          </div>
          <div className="col-md-4">
            <SupervisorAccountIcon className="icon" />
            <p>
              Over <b>500</b> support questions have been closed
            </p>
          </div>
          <div className="col-md-4">
            <AssignmentIcon className="icon" />
            <p>
              <b>3,700</b> Front copies have been purchased
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
