import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
import { useState } from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout=()=>{
 return <div>
    <Header/>
    <Outlet/>
 </div>
}
const appRouter= createBrowserRouter([
   {
      path:"/",
      element: <AppLayout></AppLayout>,
      children:[
         {
            path:"/",
            element: <Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contacts",
            element:<Contacts/>
         },
         {
            path:"/restaurants/:resid",
            element:<RestaurantMenu/>
         }
      ],
      errorElement: <Error/>
   },
   
])
const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<RouterProvider router={appRouter}/>);