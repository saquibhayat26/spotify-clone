import React from "react";
import "./Header.css";
import img1 from "./../images/1.png";
import SideNav from "./SideNav";
import MusicCard from "./MusicCard";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <img src={img1} alt="" className="image" />
      </div>
      <div className="header__bottom">
        <div className="header__nav">
          <SideNav />
        </div>

        <div className="header__container">
          <MusicCard title={"TOP OF THE WEEK"} />
          <MusicCard title={"FEATURED PLAYLIST"} />
          <MusicCard title={"TOP HITS OF ALL TIME"} />
          <MusicCard title={"FAMOUS POP"} />
          <MusicCard title={"WEEKEND SPECIAL"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
