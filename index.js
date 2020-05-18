import React, { useState } from "react";
import {RecoilRoot} from "recoil"
import { render } from "react-dom";

import FormIndex from "./formIndex.js"
import Far from "./farenheit";

import "./style.css";

const App = props => {
  const [myItems, setMyItems] = useState();

  return (
    <RecoilRoot>
<Far />
    </RecoilRoot>
  );
};

render(<App />, document.getElementById("root"));
