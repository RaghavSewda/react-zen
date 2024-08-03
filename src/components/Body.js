import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchRes, List) {
  return List.filter((res) =>
    res.info.name.toLowerCase().includes(searchRes.toLowerCase())
  );
}
const Body = () => {
  const [List, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchRes, setsearchRes] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Check your Internet Connection!!!</h1>;
  }

  return List.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={searchRes}
            onChange={(e) => {
              setsearchRes(e.target.value);
              if (e.target.value === "") {
                setFilteredList(List);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filterData(searchRes, List);
              setFilteredList(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = List.filter((res) => res.info.avgRating > 4.2);
            setFilteredList(filterList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
