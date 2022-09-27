import React, { useState } from "react";
import "./SideNav.css";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { filterMusic } from "../redux/features/filterMusicSlice";

const SideNav = () => {
  const [state, setState] = useState(false);
  const [inputData, setInputData] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    {
      inputData !== "" && dispatch(filterMusic(inputData));
    }
    setState(!state);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  return (
    <div className="sideNav">
      <div className="sideNav__container">
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="sideNav__item">
            <span>
              <GraphicEqIcon style={{ width: "1.2rem" }} />
            </span>
            <p>Home</p>
          </div>
        </Link>{" "}
        <div className="sideNav__item" onClick={handleClick}>
          <span>
            <SearchIcon style={{ width: "1.2rem" }} />
          </span>
          <p>Search</p>
        </div>
        {state && (
          <input
            onChange={(e) => handleInputChange(e)}
            className="searchInput"
          />
        )}
        <Link
          to={"/my-fav-music"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="sideNav__item">
            <span>
              <FavoriteIcon style={{ width: "1.2rem" }} />
            </span>
            <p>Favourites</p>
          </div>
        </Link>
        <Link
          to={"/play-list"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <div className="sideNav__item">
            <span>
              <PlayCircleIcon style={{ width: "1.2rem" }} />
            </span>
            <p>Playlists</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
