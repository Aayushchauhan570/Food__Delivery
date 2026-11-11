import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export const Header = () => {

    const [loginBtn, setLoginBtn] = useState(true);

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    const handleLoginBtn = () => {
        setLoginBtn(!loginBtn)
    }

    return(
        <div className='flex p-4 m-5 border-black-500 border-2 rounded-md justify-between items-center bg-blue-100 shadow-xl'>
            <div className='logo-container'>
                <img className='logo w-40' src={LOGO_URL}/>
            </div>
            <div className=''>
                <ul className='flex font-bold text-lg'>
                    <li className='px-4'>online Status : {onlineStatus ? "🟢" : "🔴" }</li>
                    <li className='px-4'><Link to={"/"}>Home</Link></li>
                    <li className='px-4'><Link to={"/about"}>About Us</Link></li>
                    <li className='px-4'><Link to={"/contact"}>Contact Us</Link></li>
                    <li className='px-4'><Link to={"/grocery"}>Grocery</Link></li>
                    <li className='px-4'><Link to={"/cart"}>Cart ({cartItems.length} items)</Link></li>
                    <li className='px-4'><button onClick={handleLoginBtn} className='login rounded-lg border border-black px-3 cursor-pointer'>{loginBtn? "Login" : "Logout"}</button></li>
                    <li className='px-4'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;