import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body=() => {

    const [listOfRestaurant,setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" 
                  onClick={() => {
                    const filteredListOfRestaurant = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );

                    setListOfRestaurant(filteredListOfRestaurant);

                  }}
                >
                  Top Rated Restaurant 
                </button>
            </div>
            <div className="res-container">

                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}

            </div>
        </div>
    );
};

export default Body;