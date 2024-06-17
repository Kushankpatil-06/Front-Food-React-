import {LOGO_URL} from "../utils/constants"
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "/src/utils/useOnlineStatus"

const Header = ()=>{
    const [btnName,setbtnName] = useState("Login");
    const OnlineStatus = useOnlineStatus();
    return(
        <div className="header">
         <img className="logo"src={LOGO_URL} alt="" />
         <h2>QUICK FOOD</h2>
         <div className="navitems">
            <ul>
                <li>Online:{OnlineStatus?" ✅ ":" ❌"}</li>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li> <Link to="/contact">Contact us</Link></li>
            <li> <Link to="/grocery">Insta mart</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>
            {btnName == "Login"
             ?setbtnName("Logout")
            :setbtnName("Login")}}>{btnName}</button>
            </ul>
            

         </div>
        </div>
    )
}

export default Header;
