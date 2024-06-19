 import {useSelector,useDispatch} from "react-redux";
 import Itemlist from"/src/components/Itemlist.js"
 import {clearCart} from "/src/utils/CartSlice.js"
 

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return(
    <div className="text-center m-10 p-10 w-6/12 m-auto">
        <h1 className="text-2xl font-bold ">Cart</h1>
        <button className="px-4 px-2 bg-blue-100 rounded-md text-lg font-serif" onClick={handleClearCart}>Clear Cart</button>
        <Itemlist items={cartItems}/>
    </div>
  )
}
export default Cart;