import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

    //console.log(resInfo);
 
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