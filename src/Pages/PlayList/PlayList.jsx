import React, { useEffect, useState } from "react";
import "./PlayList.css";

import img1 from "./../../images/1.png";

import { useGetTrackChartsQuery } from "./../../redux/services/musicApi";

import { useSelector } from "react-redux";
import SideNav from "../../Components/SideNav";
import Plus from "../../Components/Buttons/Plus";

const PlayList = () => {
  const [musicData, setMusicData] = useState(null);

  const filterData = useSelector((state) => state.filter.filterData);

  const { data } = useGetTrackChartsQuery();

  console.log(data);

  useEffect(() => {
    setMusicData(data);
  }, [data]);

  return (
    <div className="toplaylist">
      <div className="topPlaylist__top">
        <img src={img1} alt="" className="image12" />
      </div>

      <div className="topPlaylist__bottom">
        <div className="topPlaylist__nav">
          <SideNav />
        </div>
        <div className="topPlaylist__wrapper1">
          <p className="topPlaylist__containerTitle">TOP PLAYLIST</p>
          <div className="topPlaylist__wrapper2">
            {musicData &&
              musicData?.tracks
                ?.filter((track) => {
                  if (!filterData) {
                    return track;
                  } else if (
                    track.subtitle
                      .toLowerCase()
                      .includes(filterData.toLowerCase())
                  ) {
                    return track;
                  }
                })
                .map((item, index) => (
                  <div key={index} className="topPlaylist__container">
                    <div className="topPlaylist__imgContainer">
                      <img src={item.images.coverart} alt="" />
                      <div className="removeIcon__container">
                        <Plus
                          id={item.key}
                          image={item.images.coverart}
                          subtitle={item.subtitle}
                        />
                      </div>
                    </div>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
