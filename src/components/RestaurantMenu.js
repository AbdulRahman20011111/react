
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom"; // ✅ correct
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResinfo] = useState(null);
    // const { resId } = useParams();
    const { resid}=useParams();
    console.log(resid);
    
    useEffect(() => {
        fetchMenu();
    }, [resid]);

    const fetchMenu = async () => {
        const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        setResinfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
    const itemCards = resInfo?.cards?.[4]
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards;

    return (
        <div className="menu">
            <h1>{restaurantInfo?.name}</h1>
            <h2>{restaurantInfo?.cuisines?.join(", ")}</h2>
            <h2>{restaurantInfo?.costForTwoMessage}</h2>
            <ul>
                {itemCards?.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -- Rs.{item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;

