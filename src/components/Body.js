import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Body=() => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const[filteredRestaurant,setFilteredRestaurant] = useState([]);

    const[searchText,setSearchText]=useState("");

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
    
    // Conditional Rendering 
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer/>;
    // } OR

    return listOfRestaurant.length === 0 ? (<Shimmer/>) : 
    (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value);
                        }}
                    />
                    <button

                        onClick={ () => {
                            const tempFilteredRestaurant = listOfRestaurant.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(tempFilteredRestaurant);

                        }}

                    > Search
                    </button>
                </div>

                <button className="filter-btn" 
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

            <div className="res-container">

                {filteredRestaurant.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default Body;