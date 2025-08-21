import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { restaurants } from "./utils";
import { Link } from "react-router-dom";


 
const ResCard = ({ restaurant }) => {
  return (
    <div className="rescard">
        <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId}
            alt={restaurant.name}
            width="100"
            height="100"
            style={{ objectFit: "cover" }}
            // onError={(e) => {
            //     e.target.onerror = null; // prevent infinite loop if fallback fails
            //     e.target.src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f";
            // }}
        />    
      <h4>{restaurant.name}</h4>
      

      <h4>{restaurant.cuisines?.join(", ") || "Cuisines not available"}</h4>
      <h4>Rating: {restaurant.avgRating ?? "2"}</h4>
      <h4>Delivery Time: {restaurant.deliveryTime}</h4>
      <h4>Cost for two : {restaurant.costForTwo} </h4>
      
    </div>
  );
};
  const getCloudinaryImgUrl=0; 
// = (id) => {
//   // If it's a full path, return directly
//   if (id.includes("/")) {
//     return `https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/${id}`;
//   }
//   // Otherwise treat as basic image ID
//   return `https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/${id}`;
// };
const restaurants = [
  {
    info: {
      id: "830418",
      name: "Indian Coffee House",
      cuisines: ["South Indian", "Chinese", "Fast Food", "Beverages"],
      avgRating: 4.5,
      costForTwo: 300,
      deliveryTime: "40-50 mins",
      veg: true,
      cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
      link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418"
    }
  },
  {
    info: {
      id: "945448",
      name: "Yummy Better",
      cuisines: ["South Indian", "Fast Food"],
      avgRating: null,
      costForTwo: 200,
      deliveryTime: "50-60 mins",
      veg: true,
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
      link: "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448"
    }
  },
  {
    info: {
      id: "795047",
      name: "New Radhey Shyam Choule Bhature Delhi Wala",
      cuisines: ["Snacks", "Chinese"],
      avgRating: 2.9,
      costForTwo: 200,
      deliveryTime: "55-65 mins",
      veg: true,
      cloudinaryImageId: "0adf25c57357161b20c11281d8a443e6",
      link: "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047"
    }
  },
  {
    info: {
      id: "981278",
      name: "Malwa Family Restaurant",
      cuisines: ["Indian"],
      avgRating: 4.1,
      costForTwo: 300,
      deliveryTime: "45-55 mins",
      veg: false,
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/26/51443e33-cc93-4cd2-bbce-8c8f3c544fd1_981278.JPG",
      link: "https://www.swiggy.com/city/chhindwara/malwa-family-restaurant-chhindwara-city-rest981278"
    }
  },
  {
    info: {
      id: "774546",
      name: "Shree Naivedyam",
      cuisines: ["Chinese", "South Indian", "Pizzas", "Beverages"],
      avgRating: 4.1,
      costForTwo: 300,
      deliveryTime: "60-70 mins",
      veg: true,
      cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
      link: "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546"
    }
  },
  {
    info: {
      id: "625927",
      name: "Kathi Junction",
      cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 200,
      deliveryTime: "45-55 mins",
      veg: false,
      cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
      link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927"
    }
  },
  {
    info: {
      id: "1003415",
      name: "Pastas By Pizza Hut",
      cuisines: ["Pastas"],
      avgRating: 3.5,
      costForTwo: 400,
      deliveryTime: "45-55 mins",
      veg: false,
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
      link: "https://www.swiggy.com/city/chhindwara/pastas-by-pizza-hut-chhindwara-city-rest1003415"
    }
  }
];


  
  export const Body = () => {
    const [ListOfTop,setListOfTop]=useState([]);
    const [filteredRes,setFilteredRes]=useState([]);
        const [searchtxt,setSearchTxt]=useState("");

    useEffect(()=>{
      fetchData();
      console.log("useEffect called")
    },[]);

    const fetchData= async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json= await data.json();

       console.log(json);
      const f=json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      const fr=f || []
      setListOfTop(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRes(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

       console.log(ListOfTop);
    }

   if(ListOfTop.length===0){
    return <Shimmer/>
   }

  return (
    <div className="body">
      <div className="search">
      <div className="find">
        <input type="text" className="searchbox" value={searchtxt}
         onChange={(e)=>{setSearchTxt(e.target.value)}}></input>
        <button             onClick={() => {
              const searched = ListOfTop.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchtxt.toLowerCase())
              );
              setFilteredRes(searched);
            }}
              >search</button>
      </div>
       <button className="filter" onClick={()=>{const filter=ListOfTop.filter((restaurants)=> restaurants.info.avgRating>4.3)
       setFilteredRes(filter);
       }}>Top Rated Restaurants</button>
       {/* whenever use state is used react rerenders component */}
    </div>
      <div className="rescont">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id}
          to={"/restaurants/"+restaurant.info.id}><ResCard  restaurant={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};
