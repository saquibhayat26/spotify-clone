import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFavMusic } from "../../redux/features/favMusicSlice";

const Remove = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFavMusic(id));
  };

  return (
    <div className="addIconButton" onClick={handleRemove}>
      <HeartBrokenIcon sx={{ fontSize: "1.5rem" }} />
    </div>
  );
};

export default Remove;
