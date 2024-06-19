import {CDN_URL} from "../utils/constants" //named export are imported using curly braces
// import RestroCard from "/src/components/RestroCard"
import UserContext from "/src/utils/UserContext"
import {useContext} from "react";

const RestroCard = (props)=>{
    const{resData}=props;
    const {User} = useContext(UserContext);
    const{name,locality,avgRating,cuisines,costForTwo,sla} = resData?.info; //optional chaining
    return(
        <div className="p-4 m-4 w-[200px] box-content  bg-sky-100 rounded-lg shadow-lg overflow-auto hover:bg-sky-200 ">
         <img className="rounded-lg"src={CDN_URL+resData.info.cloudinaryImageId}/>
          <h3 className="font-bold py-3 text-lg">{name}</h3>
          <h4>{locality}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>⏱️:{sla.slaString}</h4>
          <h4 className="text-sm">{cuisines.join(",")}</h4>
          <h4> Hey :{User}</h4>


        

          
        </div>
    );
};


//   export const withPromotedLabel=(RestroCard)=>{
//     return(props)=>{//this is component return 
//         return( //this is compinent returig jsx
//         <div>
//          <label>Promoted</label>
//          <RestroCard {...props}/>
//         </div>

//         )
//     }
//   }
export default RestroCard;