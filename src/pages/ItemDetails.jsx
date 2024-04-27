import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })
    }, [id])
    const { name, subcategory, description, price, rating, customization, time, stock, image } = item

    return (
        <div className="container mx-auto border-2 border-amber-500 p-6 my-8">
            <div>
                <h1 className="text-5xl font-semibold mb-4">{name}</h1>
                <p className="text-xl ml-2 mb-8">{subcategory}</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="my-4">
                <p className="bg-amber-300 px-4 py-3 rounded-sm mb-2 font-bold text-2xl">Description</p>
                <p className="text-gray-600 ml-2">{description}</p>
            </div>
            <div>
                <p className="bg-amber-300 px-4 py-3 rounded-sm mb-2 font-bold text-2xl">Other Details</p>
                <div className="text-gray-600 ml-2 space-y-2">
                    <p><span className="font-semibold">Price:</span> {price}$</p>
                    <p><span className="font-semibold">Rating:</span> {rating}</p>
                    <p><span className="font-semibold">Customization:</span> {customization}</p>
                    <p><span className="font-semibold">Processing Time:</span> {time}</p>
                    <p><span className="font-semibold">Stock Status:</span> {stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;