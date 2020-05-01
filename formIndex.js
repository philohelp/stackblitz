import React from "react";

import {
  btmImg,
  rightImg,
  leftImg,
  twoCols,
  oneImgTwoCols,
  twoFold,
  singleImg,
  imgSlider,
  singleVid,
  vidSlider
} from "./images";

import * as colors from "./colors";

const imArray = [];

const singleArray = [
  { id: "leftImg", title: "Image à gauche", img: leftImg },
  { id: "rightImg", title: "Image à droite", img: rightImg },
  { id: "btmImg", title: "Image en bas", img: btmImg }
];

const doubleArray = [
  { id: "twoCols", title: "Aucune image", img: twoCols },
  { id: "oneImgTwoCols", title: "Une seule image", img: oneImgTwoCols },
  { id: "twoFold", title: "Deux images", img: twoFold }
];

const imageArray = [
  { id: "singleImg", title: "Grande image traversante", img: singleImg },
  { id: "imgSlider", title: "Slider images", img: imgSlider }
];

const videoArray = [
  { id: "singleVid", title: "Grande vidéo traversante", img: singleVid },
  { id: "vidSlider", title: "Slider vidéos", img: vidSlider }
];

const groups = {
  single: { id: "single", items: imageArray, title: "Une colonne" },
  double: { id: "double", items: videoArray, title: "Double colonne" },
  image: { id: "image", items: imageArray, title: "Images" },
  video: { id: "video", items: videoArray, title: "Vidéos" }
};

export default props => {
  return (
    <div>
      <div style={{ width: 600, display: "flex" }}>
        <Group />
        <div style={{ display: "flex" }}>
          {imageArray.map(item => (
            <div>
              <Item key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Group = () => {
  return (
    <div style={{ display: "flex" }}>
      {singleArray.map(item => (
        <div>
          <Item key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
};

const Item = props => {
  const { item } = props;
  return (
    <div
      style={{
        margin: 10,
        width: 80,
        height: 80,
        paddingTop: 3,
        paddingLeft: 3,
        border: `1px solid ${colors.grisf}`
      }}
    >
      <img src={item.img} style={{ maxHeight: 75 }} />
    </div>
  );
};
