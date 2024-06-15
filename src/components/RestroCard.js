import {CDN_URL} from "../utils/constants" //named export are imported using curly braces

const RestroCard = (props)=>{
    const{resData}=props;
    const{name,locality,avgRating,cuisines,costForTwo,sla} = resData?.info; //optional chaining
    return(
        <div className="restrocard">
         <img className="res-logo"src={CDN_URL+resData.info.cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{locality}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.slaString}</h4>
        

          
        </div>
    );
};
export default RestroCard;