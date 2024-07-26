import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchRes, List) {
  return List.filter((res) =>
    res.name.toLowerCase().includes(searchRes.toLowerCase())
  );
}
const Body = () => {
  const [List, setList] = useState(resList);
  const [searchRes, setsearchRes] = useState("");
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder=""
          value={searchRes}
          onChange={(e) => {
            setsearchRes(e.target.value);
            if (e.target.value === "") {
              setList(resList);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchRes, List);
            setList(data);
          }}
        >
          Search
        </button>
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
