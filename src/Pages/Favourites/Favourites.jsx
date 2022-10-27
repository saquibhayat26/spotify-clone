import React from "react";
import "./Favourites.css";
import { useDispatch, useSelector } from "react-redux";
import Remove from "../../Components/Buttons/Remove";
import SideNav from "../../Components/SideNav";
import img1 from "../../images/1.png";

const Favourites = () => {
  const myFavMusic = useSelector((state) => state.music.myMusic);

  return (
    <div className="favourites">
      <div className="favourites__top">
        <img src={img1} alt="" className="image" />
      </div>
      <div className="favourites__bottom">
        <div className="favourites__nav">
          <SideNav />
        </div>

        <div className="favMusic__wrapper1">
          <div className="favMusic__wrapper2">
            {myFavMusic?.map((track, index) => (
              <div key={index} className="favMusic__container">
                <div className="favMusic__imgContainer">
                  <img src={track.image} alt="" />
                  <div className="removeIcon__container">
                    <Remove id={track.id} />
                  </div>
                </div>
                <p>{track.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
