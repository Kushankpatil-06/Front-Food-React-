import {useEffect,useState} from "react";
import {MENU_API} from "/src/utils/constants"


const useRestaurantM=(resId)=>{
      useEffect(() => {
    fetchMenu();
  }, []);

  const[resInfo,setResInfo]=useState(null)

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error('Error fetching the menu:', error);
    }
  };
    //fetch data
    return resInfo;

}
export default useRestaurantM;