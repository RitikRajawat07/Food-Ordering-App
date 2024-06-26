import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    // const[resInfo,setResInfo] = useState(null);

    const {resId}=useParams();

    const resInfo = useRestaurantMenu(resId);   // l-9 custom hooks

    // useEffect( () =>{
    //     fetchMenu();
    // }, [] );

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);

    //     const json=await data.json();
    //     console.log(json);
    //     setResInfo(json?.data);
    // };

    // L-11 CONTROLLED AND UNCONTROLLED COMPO..BUILDING RestaurantCategory a controlled compo.
    const [showIndex,setShowIndex] = useState(null);

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

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.['@type'] ===
                'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    console.log(categories);
 
    return (
        <div className="menu  text-center">
            <h1 className="font-bold my-6 text-5xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3 className="font-bold text-lg">Rating - {avgRating}⭐</h3>

            {/* CATEGORIES ACCORDIONS */}

            {
                categories.map((category,index) => (

                    // CONTROLLED COMPONENT

                    <RestaurantCategory 
                        key={category.card?.card?.title} 
                        data={category.card?.card}
                        showItems={index===showIndex }
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))
            }

        </div>
    );
};

export default RestaurantMenu;