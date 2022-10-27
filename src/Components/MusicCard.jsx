import React, { useEffect, useState } from "react";
import "./MusicCard.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Music from "./Music";

import { useGetTrackChartsQuery } from "../redux/services/musicApi";

import { useSelector } from "react-redux";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet1: {
    breakpoint: { max: 1024, min: 764 },
    items: 5,
  },
  tablet2: {
    breakpoint: { max: 764, min: 680 },
    items: 4,
  },
  tablet3: {
    breakpoint: { max: 680, min: 560 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 2,
  },
};

const MusicCard = ({ title }) => {
  const [musicData, setMusicData] = useState(null);

  const filterData = useSelector((state) => state.filter.filterData);

  const { data } = useGetTrackChartsQuery();

  useEffect(() => {
    setMusicData(data);
  }, [data]);

  return (
    <div className="playlist">
      <p className="playlist__title">{title}</p>
      {musicData && (
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["table2", "tablet3", "mobile"]}
        >
          {musicData?.tracks
            ?.filter((track) => {
              if (!filterData) {
                return track;
              } else if (
                track.subtitle.toLowerCase().includes(filterData.toLowerCase())
              ) {
                return track;
              }
            })
            .map((track, index) => (
              <div className="music__wrapper" key={"index"}>
                <Music track={track} key={index} />
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default MusicCard;
