import useRestaurantMenu from './../utils/useRestaurantMenu';
import { useParams } from 'react-router';
import resData from '../utils/resData';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';


const RestaurantMenu = () => {
  // const {resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  // const resInfo = useRestaurantMenu(resId);

  // console.log("this is ifno: ",resData[1].data.cards[2].card.card.info);
  // resData.map((data) => {
  //   const categories = data.data.cards[3].groupedCard.cardGroupMap.REGULAR?.cards.filter((c) => 
  //     c.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //   console.log("this is category : ",categories);

  // })
  // console.log(resInfo);

  const categories = resData[1].data.cards[3].groupedCard.cardGroupMap.REGULAR?.cards.filter((c) => 
    c.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log("this is cate: ",categories);

  const {name,cuisines, costForTwoMessage } = resData[1].data.cards[2].card.card.info;


  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>

      {/** categories accordians */}
      {categories.map((category,idx) =>(
        <RestaurantCategory key={idx} data={category.card.card} showItems={idx === showIndex ? true : false} setShowIndex={()=> setShowIndex(idx)}/>)
      )}

    </div>
  )
}

export default RestaurantMenu;