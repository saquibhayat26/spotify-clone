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
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 764, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MusicCard = ({ title }) => {
  const [musicData, setMusicData] = useState(null);

  const filterData = useSelector((state) => state.filter.filterData);

  const { data, isError, isLoading } = useGetTrackChartsQuery();

  useEffect(() => {
    setMusicData(data);
  }, [data]);

  return (
    <div className="playlist">
      <p className="playlist__title">{title}</p>
      {musicData && (
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={false}
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
                track.subtitle.toLowerCase().includes(filterData.toLowerCase())
              ) {
                return track;
              }
            })
            .map((track, index) => (
              <Music track={track} key={index} />
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default MusicCard;
