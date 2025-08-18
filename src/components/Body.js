import { useState } from "react";


 
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
      

      <h4>{restaurant.cuisines.join(", ")}</h4>
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
    id: "830418",
    name: "Indian Coffee House",
    cuisines: ["South Indian", "Chinese", "Fast Food", "Beverages"],
    avgRating: 4.5,
    costForTwo: 300,
    deliveryTime: "40-50 mins",
    veg: true,
    cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
   // thumbnail: getCloudinaryImgUrl("2469fa88ee9b0b5d1366ba88f2a7fa7f"), 
    link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418"
  },
  {
    id: "945448",
    name: "Yummy Better",
    cuisines: ["South Indian", "Fast Food"],
    avgRating: null,
    costForTwo: 200,
    deliveryTime: "50-60 mins",
    veg: true,
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
    //thumbnail: getCloudinaryImgUrl("RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg"),    
    link: "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448"
  },
  {
    id: "795047",
    name: "New Radhey Shyam Choule Bhature Delhi Wala",
    cuisines: ["Snacks", "Chinese"],
    avgRating: 2.9,
    costForTwo: 200,
    deliveryTime: "55-65 mins",
    veg: true,
    cloudinaryImageId: "0adf25c57357161b20c11281d8a443e6",
   // thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/0adf25c57357161b20c11281d8a443e6",
    link: "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047"
  },
  {
    id: "981278",
    name: "Malwa Family Restaurant",
    cuisines: ["Indian"],
    avgRating: 4.1,
    costForTwo: 300,
    deliveryTime: "45-55 mins",
    veg: false,
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/26/51443e33-cc93-4cd2-bbce-8c8f3c544fd1_981278.JPG",
  //  thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/26/51443e33-cc93-4cd2-bbce-8c8f3c544fd1_981278.JPG",
    link: "https://www.swiggy.com/city/chhindwara/malwa-family-restaurant-chhindwara-city-rest981278"
  },
  {
    id: "774546",
    name: "Shree Naivedyam",
    cuisines: ["Chinese", "South Indian", "Pizzas", "Beverages"],
    avgRating: 4.1,
    costForTwo: 300,
    deliveryTime: "60-70 mins",
    veg: true,
    cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
   // thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/2274f59cb8efcfab1f446b195bcbda3b",
    link: "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546"
  },
  {
    id: "625927",
    name: "Kathi Junction",
    cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
    avgRating: 4.3,
    costForTwo: 200,
    deliveryTime: "45-55 mins",
    veg: false,
    cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
    //thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/nigqvxgzvyxtfjuqasgg",
    link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927"
  },
  {
    id: "1003415",
    name: "Pastas By Pizza Hut",
    cuisines: ["Pastas"],
    avgRating: 3.5,
    costForTwo: 400,
    deliveryTime: "45-55 mins",
    veg: false,
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
   // thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
    link: "https://www.swiggy.com/city/chhindwara/pastas-by-pizza-hut-chhindwara-city-rest1003415"
  },
  {
    id: "234875",
    name: "Adil Hotel",
    cuisines: ["Biryani", "Tandoor"],
    avgRating: 4.4,
    costForTwo: 150,
    deliveryTime: "67-72 mins",
    veg: false,
    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
   // thumbnail: "https://res.cloudinary.com/swiggy/image/upload/w_100,h_100/gp1ityra6utvzqn6ghnv",
    link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875"
  }
];

  
export const Body = () => {
    const [ListOfTop,setListOfTop]=useState(restaurants);
  return (
    <div className="body">
      <div className="search">
       <button className="filter" onClick={()=>{const filter=ListOfTop.filter((restaurants)=> restaurants.avgRating>4)
       setListOfTop(filter);
       }}>Top Rated Restaurants</button>
       {/* whenever use state is used react rerenders component */}
    </div>
      <div className="rescont">
        {ListOfTop.map((restaurant) => (
          <ResCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
