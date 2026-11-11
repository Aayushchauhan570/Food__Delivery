import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from "./components/Body";
import About from './components/About';
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet  } from 'react-router';
import UserContext from './utils/UserContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "Aayush chauhan"
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}> {/** This is react-redux provider  */}
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>  {/** This is react context provider  */}
            <div className='app'>
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={
                        <h1>Loading....</h1>
                    }>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);