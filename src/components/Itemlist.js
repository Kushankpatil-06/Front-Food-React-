import {CDN_URL} from "/src/utils/constants"
import {useDispatch} from "react-redux"
import {addItem} from"/src/utils/CartSlice"

const Itemlist =({items})=>{
    // console.log(items); 
    const dispatch = useDispatch()

    const handleClick=(item)=>{
dispatch(addItem(item))
    }
    return(
         <div>
            {items.map((item)=>(
                <div key={item.card.id} className="p-2 m-2 border-b-4 ">
            <div className="flex justify-between">
                        <div className="" >
                       <span className="py-2">{item.card.info.name}</span> 
                       <span> ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span> 
                         <p className="text-xs">{item.card.info.description}</p>
                    </div>
              
               <div className="w-40 rounded-lg">
                <button className="p-2 mx-12 text-black-400 bg-slate-50 rounded-lg" onClick={()=>handleClick(item)}>Add</button>
                <img className="rounded-lg" src={CDN_URL+item.card.info.imageId}/></div> 

             </div>
                </div>
            ))}

         </div>
    ) 
}
export default Itemlist