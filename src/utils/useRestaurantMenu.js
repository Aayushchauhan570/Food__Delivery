import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState("");

    useEffect(() => {
        // fetchMenu();
    }, []);

    // const fetchMenu = async() =>{
    //     console.log(MENU_URL + resId);
    //     const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(MENU_URL+resId)}`;
    //     const data = await fetch(proxyUrl);
    //     console.log("this is menu data : ",data);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json);
    // }

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.831692&lng=80.92134709999999&restaurantId=63930&catalog_qa=undefined&submitAction=ENTER");
        console.log(data);
        const json = await data.json();
        console.log(json);
    }

    // const fetchMenu = async () => {
    //     const params = new URLSearchParams({
    //         key: "6c2493f1",
    //         url: MENU_URL+resId,
    //     });
    //     const response = await fetch('https://corsproxy.io/?' + params);
    //     console.log(response);
    //     if (!response.ok) throw new Error('HTTP ' + response.status + ': ' + await response.text());
    //     const data = await response.json();
    //     console.log(data);
    // }

    return resInfo;
}

export default useRestaurantMenu;