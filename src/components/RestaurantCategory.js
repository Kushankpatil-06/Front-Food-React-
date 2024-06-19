import Itemlist from "/src/components/Itemlist"
import {useState} from "react";


const RestaurantCategory =({data,showItems,setshowIndex})=>{
 
const handleClick=()=>{
    setshowIndex();
}
    return (<div>
        {/* //{Accodium HEader} */}
         <div className="w-6/12 h-13 mx-auto my-5 bg-gray-100 shadow-xl  rounded-lg">
            <div className="flex justify-between cursor-pointer "onClick={handleClick}>
            <span className="my-3 font-bold text-lg" >{data.title} ({data.itemCards.length}) </span>
            <span className="mx-8 my-3">🔽</span>
            </div>
            {showItems && <Itemlist items={data.itemCards}/>}
            
         </div>
        {/* //{Accodium Data} */}
    </div>
    )
}

export default RestaurantCategory;