import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="text-center m-4 p-4">
           <h1 className="text-3xl font-bold">Cart - {cartItems.length}</h1>
            <div className=" w-6/12 m-auto ">
                <button onClick={handleClearCart} className="m-3 p-3 rounded-lg bg-black text-white ">Clear Cart</button>
                <ItemCards items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;