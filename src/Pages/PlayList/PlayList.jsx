import React, { useEffect, useState } from "react";
import "./PlayList.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Plus from "../../Components/Buttons/Plus";

import { useGetTrackChartsQuery } from "./../../redux/services/musicApi";

import { useSelector } from "react-redux";
import SideNav from "../../Components/SideNav";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 5,
  },
  tablet2: {
    breakpoint: { max: 764, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const PlayList = () => {
  const [musicData, setMusicData] = useState(null);

  const filterData = useSelector((state) => state.filter.filterData);

  const { data } = useGetTrackChartsQuery();

  console.log(data);

  useEffect(() => {
    setMusicData(data);
  }, [data]);

  return (
    <>
      {" "}
      <SideNav />
      <div className="playlist__container">
        <p className="playlist__containerTitle">TOP PLAYLIST</p>
        {musicData && (
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {musicData?.tracks
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
              .map((track, index) => (
                <div className="container">
                  <div key={index} className="playlist__musicContainer">
                    {" "}
                    <div className="playlist__ImgContainer">
                      <img src={track.images.coverart} alt="" />
                      <div className="playlist__addIconContainer">
                        <Plus
                          id={track.key}
                          key={track.key}
                          image={track.images.coverart}
                          subtitle={track.subtitle}
                        />
                      </div>
                    </div>
                    <p>{track.subtitle}</p>
                  </div>
                </div>
              ))}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default PlayList;
