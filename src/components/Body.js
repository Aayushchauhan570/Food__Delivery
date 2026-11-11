import Shimmer from './Shimmer';
import RestaurantCard, {withOpenRestaurant} from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import NoRestaurantFound from './NoRestaurantFound';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {

    const [Restaurant, setRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);

    /// for Higher order components
    const RestaurantwithOpen = withOpenRestaurant(RestaurantCard);

    const handleTopRestaurantFilter = () => {
        const filteredRestaurant = Restaurant.filter(res => Number(res.info.avgRating) > 4.5);
        setFilteredRestaurant(filteredRestaurant);
    }

    const handleSearch = () => {
        if (searchText.length === 0) return alert("Nothing to search try name some restaurant");
        const filteredRestaurent = Restaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        filteredRestaurent.length === 0 ? <NoRestaurantFound /> : setFilteredRestaurant(filteredRestaurent);

        setSearchText("");
    }

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.831692&lng=80.92134709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const JsonData = await data.json();
        setRestaurant(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleResetFilter = () => {
        setFilteredRestaurant(Restaurant);
    }

    // Conditional Rendering
    // if(Restaurant.length === 0){
    //     return <Shimmer />
    // }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1>Looks like you are offline please check your internet connection !!!</h1>
    )

    return Restaurant.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter m-5 flex gap-5'>
                <div className='search flex gap-2 px-4 '>
                    <input type='text' data-testid="searchInput" className='search-box border-2 border-black rounded-md p-2' value={searchText} required onChange={(e) => setSearchText(e.target.value)} />
                    <button className='search-btn bg-blue-500 px-3 border-2 border-black rounded-md text-white cursor-pointer' onClick={handleSearch}>Search</button>
                </div>
                <button className='reset-filter bg-green-500 px-3 border-2 border-black rounded-md text-white cursor-pointer' onClick={handleResetFilter}>Reset Filter</button>
                <button className='filter-btn bg-amber-500 px-3 border-2 border-black rounded-md text-white cursor-pointer' onClick={handleTopRestaurantFilter}>Top rated Restaurant</button>

                <div>
                    <label >User : </label>
                    <input value={loggedInUser} type='text' className='border-2 border-black p-3 rounded' onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div  className='restaurant-container flex flex-wrap gap-5'>
                {
                    filteredRestaurant.map((res) => (
                        <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id}>
                            {
                                res?.info?.isOpen ? 
                                (<RestaurantwithOpen resData={res?.info}/> ):
                                (<RestaurantCard resData={res?.info} />)}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;