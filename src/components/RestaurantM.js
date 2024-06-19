import { useEffect, useState } from "react";
import Shimmer from "/src/components/Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "/src/utils/constants"
import useRestaurantM from "/src/utils/useRestaurantM"
import RestaurantCategory from "/src/components/RestaurantCategory"

const RestaurantM = () => {


  const{resId}=useParams()
const [showIndex,  setshowIndex]=useState()
  const resInfo = useRestaurantM(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }
    const itemCategories = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item.card["card"]["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(itemCategories); 



  const renderItemCards = () => {
    const itemCards = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // console.log(itemCards);
    // const categories = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].filter((c)=>c.card. ["card"]. ["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

// Log the results to check if the items were found
// console.log("fksdjfhskfj");

    if (itemCards) {
      return itemCards.map((item, index) => (
        <div key={index}>
          <h2>{item.card.info.name}</h2>
          <h3 className="price">Rs {item.card.info.price/100}</h3>
          <p>{item.card.info.description}</p>
          
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-10">{resInfo.cards[2]?.card?.card?.info?.name}</h1>
      <p className="font-bold text-lg">{resInfo.cards[2]?.card?.card?.info?.cuisines.join(', ')}</p>
      <h3>{resInfo.cards[2]?.card?.card?.info?.defaultPrice/100||resInfo.cards[2]?.card?.card?.info?.costForTwo/100}</h3>
      {itemCategories.map((category,index)=>(<RestaurantCategory key={category?.data?.card?.card?.title} data={category?.card?.card}
      showItems={index == showIndex? true : false}
      setshowIndex={()=> setshowIndex(index)}/>))}

    </div>
  );
};

export default RestaurantM;
