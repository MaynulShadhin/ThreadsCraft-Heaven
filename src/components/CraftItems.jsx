import { useLoaderData } from "react-router-dom";
import SingleItem from "./SingleItem";

const CraftItems = () => {

    const items = useLoaderData();

    const slicedItems = items.slice(0,6);

    return (
        <div className="md:mx-auto md:container">
            <div className="text-center mt-16">
                <h1 className="text-5xl font-bold"> Craft Items</h1>
                <p className="text-lg text-gray-600">Discover exquisite, handcrafted artisanal items, uniquely customizable for your taste. <br /> Quality, authenticity, and creativity define our eco-friendly offerings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    slicedItems.map(item=> <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default CraftItems;