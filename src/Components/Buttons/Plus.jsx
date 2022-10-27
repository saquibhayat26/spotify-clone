import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { getFavMusic } from "../../redux/features/favMusicSlice";

const Plus = ({ id, image, subtitle }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(getFavMusic({ id, image, subtitle }));
  };
  return (
    <div className="addIconButton" onClick={(e) => handleAdd(e)}>
      <FavoriteIcon sx={{ fontSize: "1.5rem" }} />
    </div>
  );
};

export default Plus;
