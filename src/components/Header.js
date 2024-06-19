import {LOGO_URL} from "../utils/constants"
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "/src/utils/useOnlineStatus"
import UserContext from "/src/utils/UserContext"
import {useContext} from "react"
import {useSelector} from "react-redux";

const Header = ()=>{
    const [btnName,setbtnName] = useState("Login");
    const OnlineStatus = useOnlineStatus();
    const {User} = useContext(UserContext);
    const cart = useSelector((store) => store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100  shadow-xl  m-2 ">
         <div className="border-2 border-slate-500 m-4 rounded-lg"><img className="w-44"src={LOGO_URL} alt="" /></div>
         <div className=" flex font-bold font-serif text-4xl items-center hover:font-sans " >QUICK FOOD</div>
         <div className="flex items-center">
            <ul className="flex p-5 m-5">
                <li className="px-2">Online:{OnlineStatus?" ✅ ":" ❌"}</li>
            <li className="px-3"><Link to="/">Home</Link></li>
            <li className="px-3" > <Link to="/about">About us</Link></li>
            <li className="px-3"> <Link to="/contact">Contact us</Link></li>
            <li className="px-3"> <Link to="/grocery">Insta-mart</Link></li>
            <li className="px-3 font-bold text-lg"><Link to="/cart">Cart {cart.length} items</Link></li>
            <li className="px-3">{User}</li>
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
