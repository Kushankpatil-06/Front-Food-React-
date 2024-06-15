import React from "react"
import ReactDOM from "react-dom/client"
import Header from "/src/components/Header"
import Body from "/src/components/Body"
import RestroCard from "./components/RestroCard"





                            








const AppLayout = ()=>{
    return (
        <div className="app">
<Header/>
<Body/>

        </div>
    )
}








const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);