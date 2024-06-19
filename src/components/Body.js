import RestroCard,{withPromotedLabel} from "/src/components/RestroCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "/src/utils/useOnlineStatus"
import UserContext from "/src/utils/UserContext"


const Body = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const[searchtext,setSearchtext] = useState("");
  const{User,setInfo}= useContext(UserContext);
// const PromotedRes= withPromotedLabel(RestroCard)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5073514&lng=73.8076543&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json); // Log the JSON response to inspect its structure

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

const OnlineStatus=useOnlineStatus();
if(OnlineStatus===false)
return(
  <h1>Oops It seems Like you are Offline !!!!</h1>
  // <h1>Please Check your Internet Connection</h1>
)


  if (loading) {
    return <Shimmer />; // Show Shimmer while loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <div className="body">
      
      <div className="search m-3 p-3 flex flex-row items-center ">
        <div className="m-3 p-3">
        <input type="text" className="border border-solid border-black " value={searchtext} onChange={(event)=>{
            setSearchtext(event.target.value);
        }} />
        <button className="px-4 px-2 m-5 bg-blue-100 rounded-md  text-lg font-serif" onClick={(()=>{
        const filteredList = list.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
        setfilteredRestaurant(filteredList);
      })}>Search</button>
      </div>
      <div className="m-3 p-3">
      <button
        className="px-4 px-2 bg-blue-100 rounded-md text-lg font-serif "
        onClick={() => {
          const filteredList = filteredRestaurant.filter((res) => res.info.avgRating > 4.3);
          setfilteredRestaurant(filteredList);
          console.log("button clicked");
        }}
      >
        Top rated Restaurants
      </button>
      </div>
      <div className="m-3 p-3">
      <input type="text" className="border border-solid border-black  bg-blue-100 rounded-md  text-lg " value={User}  onChange={(event)=>setInfo(event.target.value)}/>
      </div>
      </div>
      
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            {/* restaurant.data.promoted?PromotdRes */}
            
            <RestroCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
