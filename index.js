import React, { useState } from "react";
import { render } from "react-dom";

import FormIndex from "./formIndex.js"

import "./style.css";

const App = props => {
  const [myItems, setMyItems] = useState();

  return (
    <div>
      <FormIndex />
    </div>
  );
};

render(<App />, document.getElementById("root"));
