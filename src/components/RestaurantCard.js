import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h3 className="resName">{name}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
