import { useEffect, useState } from "react";
import Shimmer from "/src/components/Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "/src/utils/constants"
import useRestaurantM from "/src/utils/useRestaurantM"

const RestaurantM = () => {


  const{resId}=useParams()

  const resInfo = useRestaurantM(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const renderItemCards = () => {
    const itemCards = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemCards);
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
    <div>
      <h1>{resInfo.cards[2]?.card?.card?.info?.name}</h1>
      <h2>{resInfo.cards[2]?.card?.card?.info?.cuisines.join(', ')}</h2>
      <h3>{resInfo.cards[2]?.card?.card?.info?.defaultPrice/100||resInfo.cards[2]?.card?.card?.info?.costForTwo/100}</h3>
      <div>
        {renderItemCards()}
      </div>
    </div>
  );
};

export default RestaurantM;
