import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const[resInfo,setResInfo] = useState(null);

    const {resId}=useParams();

    useEffect( () =>{
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);

        const json=await data.json();
        console.log(json);
        setResInfo(json?.data);
    };

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo);

    const {
        name,
        cuisines,
        costForTwoMessage,
        costForTwo,
        cloudinaryImageId,
        avgRating,
        sla,
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0] ;
 
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3>Rating - {avgRating}</h3>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."} {(item.card.info.finalPrice) / 100 || item.card.info.defaultPrice / 100} 
                </li>
            ))}
            </ul>

        </div>
    );
};

export default RestaurantMenu;