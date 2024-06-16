import RestroCard from "/src/components/RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const[searchtext,setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json); // Log the JSON response to inspect its structure

      // Find the correct path to the restaurants data
      const restaurants = json?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

      setList(restaurants);
      setfilteredRestaurant(restaurants)
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Set error message
      setLoading(false); // Set loading to false in case of error
    }
  };

  if (loading) {
    return <Shimmer />; // Show Shimmer while loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          const filteredList = filteredRestaurant.filter((res) => res.info.avgRating > 4.3);
          setfilteredRestaurant(filteredList);
          console.log("button clicked");
        }}
      >
        Top rated Restaurants
      </button>
      <div className="search">
        <input type="text" className="search-box" value={searchtext} onChange={(event)=>{
            setSearchtext(event.target.value);
        }} />
      </div>
      <button className="icon" onClick={(()=>{
        const filteredList = list.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
        setfilteredRestaurant(filteredList);
      })}>Search</button>;
      <div className="rest-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestroCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
