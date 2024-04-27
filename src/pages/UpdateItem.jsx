import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })
    }, [id]);

    const { name, subcategory, description, price, rating, customization, time, stock, image } = item

    return (
        <div>

        </div>
    );
};

export default UpdateItem;