import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [List, setList] = useState(resList);
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = List.filter((res) => res.avgRating > 4.5);
            setList(filterList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {List.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
