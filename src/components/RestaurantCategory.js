import ItemCards from "./ItemCards";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleShowItems = () => {
        setShowIndex();
    }

    return (
        <div>
            {/** Header */}
            <div className="w-7/12 mx-auto bg-gray-50 shadow-lg my-4 p-6">
                <div className="flex justify-between" onClick={handleShowItems}>
                    <span className="text-lg font-medium">{data.title} ({data.itemCards.length})</span>
                    <span data-testid="openCategory" className="cursor-pointer text-lg font-medium">⬇️</span>
                </div>

                {showItems && <ItemCards items={data.itemCards} />}
            </div>
            {/* <p> Description</p> */}


        </div>
    )
}

export default RestaurantCategory;