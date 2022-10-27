import React from "react";
import "./Music.css";

import Plus from "./Buttons/Plus";

const Music = ({ track, index }) => {
  return (
    <div key={index} className="music__container">
      <div className="music__imgContainer">
        <img src={track.images.coverart} alt="" />
        <div className="addIcon__container">
          <Plus
            id={track.key}
            image={track.images.coverart}
            subtitle={track.subtitle}
          />
        </div>
      </div>
      <p>{track.subtitle}</p>
    </div>
  );
};

export default Music;
