import React, { useState } from "react";
import { render } from "react-dom";

import "./style.css";

const App = props => {
  const [myItems, setMyItems] = useState();

  return (
    <div>
      Hello
    </div>
  );
};

render(<App />, document.getElementById("root"));
