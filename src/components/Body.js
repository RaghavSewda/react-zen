import RestaurantCard, { WithOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
  const RestaurantCardOpen = WithOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return List.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchRes}
            onChange={(e) => {
              setsearchRes(e.target.value);
              if (e.target.value === "") {
                setFilteredList(List);
              }
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const data = filterData(searchRes, List);
              setFilteredList(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = List.filter((res) => res.info.avgRating > 4.2);
              setFilteredList(filterList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName</label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
