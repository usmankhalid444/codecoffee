/** @format */

import React from "react";
import EditorHeading from "./EditorHeading";
import Button from "@material-ui/core/Button";

function Editor() {
  return (
    <>
      <div className="editor">
        <EditorHeading />
        <div className="container editor-panel ">
          <p> $ npm install</p>
          <h3>Everything installed!</h3>
          <br />
          <p> $ gulp</p>
          <h3>scss watching</h3>
          <h3>LiveReload started</h3>
          <h3>Opening localhost:3000</h3>
          <br />
          <p> $ that's it?!</p>
          <h3>Yup, that's it.</h3>
          <br />
        </div>
        <div className="p-heading">
          <p>
            Not comfortable diving that deep? No worries, you just use the{" "}
            <br />
            compiled CSS and examples pages! Learn more
          </p>
          <div className="container technologies"></div>
          <Button>Get a License for $49</Button>
        </div>
      </div>
    </>
  );
}

export default Editor;
