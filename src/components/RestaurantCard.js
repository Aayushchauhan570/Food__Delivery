import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
    // console.log(resData);
    const { name, cuisines, avgRating, sla, cloudinaryImageId, totalRatingsString } = resData;
    return (
        <div data-testid="resCard"  className='res-card w-65 px-2 py-3  bg-gray-200 rounded-lg hover:shadow-xl/50'>
            <img className='res-img rounded-lg h-45 w-full object-cover' alt='res-logo' src={CDN_URL + cloudinaryImageId} />
            {/* <img className='res-img' alt='res-logo' src={newImgLink? newImgLink: cloudinaryImageId } /> */}
            <h3 className='text-lg font-bold py-3'>{name}</h3>
            <h4 className='text-md font-medium pb-3'>{cuisines.join(", ")}</h4>
            <h4 className='text-md font-medium pb-3'>{avgRating} ({totalRatingsString})</h4>
            <h4 className='text-md font-medium pb-3'>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}


/// Higher Order Function

export const withOpenRestaurant = () => {
    return (props) => {
        return (
            <div>
                <label className='absolute my-3 p-3 bg-gray-700 text-white rounded-md'>OPEN</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;