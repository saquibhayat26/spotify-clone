import React from "react";
import "./Header.css";
import img1 from "./../images/1.png";
import SideNav from "./SideNav";
import MusicCard from "./MusicCard";

const Header = () => {
  return (
    <div className="header">
      <SideNav />
      <div className="header__container">
        <div className="image__container">
          <img src={img1} alt="" className="image" />
        </div>
        <MusicCard title={"TOP OF THE WEEK"} />
        <MusicCard title={"FEATURED PLAYLIST"} />
        <MusicCard title={"TOP HITS OF ALL TIME"} />
        <MusicCard title={"FAMOUS POP"} />
        <MusicCard title={"WEEKEND SPECIAL"} />
      </div>
    </div>
  );
};

export default Header;
