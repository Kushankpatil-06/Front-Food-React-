import { useEffect, useState } from "react";
import Shimmer from "/src/components/Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "/src/utils/constants"

const RestaurantM = () => {
  const [resInfo, setResInfo] = useState(null);

  const{resId}=useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+resId);
      const json = await data.json();
    //   console.log(json.data.cards[2].card?.card?.info?.name);
    //   console.log(json.data.cards[2].card?.card?.info?.cuisines);
    //   console.log(json.data.cards[2].card?.card?.info?.costForTwoMessage);
    //   console.log(json.data.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
      setResInfo(json.data);
    } catch (error) {
      console.error('Error fetching the menu:', error);
    }
  };

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
      <h3>{resInfo.cards[2]?.card?.card?.info?.
defaultPrice
/100||resInfo.cards[2]?.card?.card?.info?.costForTwo/100}</h3>
      <div>
        {renderItemCards()}
      </div>
    </div>
  );
};

export default RestaurantM;
