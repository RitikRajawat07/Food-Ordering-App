import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=() => { 

    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const[filteredRestaurant,setFilteredRestaurant] = useState([]);

    const[searchText,setSearchText]=useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //console.log(listOfRestaurant);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.864004136647786&lng=75.79741593450308&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //l-9 constant hook 

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <div className="onlinestatus">
                <h1>Looks like you're offline!!!</h1>
                <h2>Please check your internet connection...</h2>
            </div>
        );
    }
    
    // Conditional Rendering 
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer/>;
    // } OR

    return listOfRestaurant.length === 0 ? (<Shimmer/>) : 
    (
        <div className="body">
            <div className="filter flex"> 
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"

                        onClick={ () => {
                            const tempFilteredRestaurant = listOfRestaurant.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(tempFilteredRestaurant);

                        }}

                    > Search
                    </button>
                </div>
                
                <div className=" m-4 p-4 flex items-center">

                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                  onClick={() => {
                    const tempFilteredRestaurant = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );

                    setListOfRestaurant(tempFilteredRestaurant);

                  }}
                >
                  Top Rated Restaurant 
                </button> 

                </div>
    
            </div>

            <div className="res-container flex flex-wrap">

                {filteredRestaurant.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {
                            restaurant?.info?.isOpen ? <RestaurantCardPromoted resData={restaurant}/> 
                                                        : <RestaurantCard resData={restaurant}/>
                        }

                        {/* <RestaurantCard  resData={restaurant}/> */}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default Body;