import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const[resInfo,setResInfo] = useState([]);

    const {resId}=useParams();

    useEffect( () =>{
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.864004136647786&lng=75.79741593450308&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        console.log(json);
        setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const {name,cuisines,costForTwo,avgRating} = resInfo[1]?.info;

    return resInfo.length === null ? (<Shimmer/>) : 
    (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {resInfo[0]?.info?.costForTwo}
            </p>
            {/* <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul> */}

            <h3>Rating - {avgRating}</h3>
        </div>
    );
};

export default RestaurantMenu;