import React from "react";

import {
  diapo,
  btmImg,
  rightImg,
  leftImg,
  singleImg,
  twoCols,
  topImgTwoCols,
  twoFold
} from "./images";

import * as colors from "./colors";

const imArray = [
  leftImg,
  rightImg,
  btmImg,
  singleImg,
  diapo,
  twoCols,
  topImgTwoCols,
  twoFold
];

export default props => {
  return (
    <div>
    <div style={{width:650, display:"flex", flexWrap:"wrap"}}>
      {imArray.map(im => (
        <div
          key={im}
          style={{
            margin:10,
            width: 80,
            height: 80,
            paddingTop: 3,
            paddingLeft: 3,
            border: `1px solid ${colors.grisf}`
          }}
        >
          <img src={im} style={{ maxHeight: 75 }} />
        </div>
      ))}
      </div>
    </div>
  );
};
