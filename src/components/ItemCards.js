import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemCards = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        /// Dispatch an action
        dispatch(addItems(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className=" p-4 m-4 border-b-2 border-gray-300 flex justify-between">
                    <div className="w-8/12 text-left">
                        <div className="flex flex-col">
                            <span className="font-bold text-md py-2">{item.card.info.name}</span>
                            <span className="">{"₹"} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-s">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 py-3">
                        <div className="absolute px-auto">
                            <button onClick={() => handleAddItems(item)} className="px-9 py-2 mx-10 mt-25 font-semibold bg-white border hover:bg-gray-300 border-gray-300 text-green-500 rounded-lg shadow-2xl">ADD</button>
                        </div>
                        <img className="w-full h-30 border-gray-700 rounded-lg" src={CDN_URL + item.card.info.imageId} alt="Food Image"/>
                    </div>

                </div>

            ))}
        </div>
    )
}
export default ItemCards;