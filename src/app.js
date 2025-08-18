import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
import { useState } from "react";




const AppLayout=()=>{
 return <div>
    <Header/>
    <Body/>
 </div>
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<AppLayout/>);