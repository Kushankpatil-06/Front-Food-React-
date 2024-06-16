import React from "react"
import ReactDOM from "react-dom/client"
import Header from "/src/components/Header"
import Body from "/src/components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestroCard from "./components/RestroCard"

import RestaurantM from "./components/RestaurantM"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"





                            








const AppLayout = ()=>{
    return (
        <div className="app">
<Header/>
{/* <Body/> */}
<Outlet/>


        </div>
    )
}

const approuter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
        // errorElement:<Error/>
    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/Contact",
        element:<Contact/>
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantM/>
    },
],
   errorElement:<Error/>,
}
])








const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>);