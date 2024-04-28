import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFilteredItem from "../components/SingleFilteredItem";

const FilteredSubCategory = () => {
        const [items,setItems]=useState([])
        const {subcategory} = useParams()

        useEffect(()=>{
            fetch(`http://localhost:5000/subcategory/${subcategory}`)
            .then(res=>res.json())
            .then(data=>{
                setItems(data)
                console.log(data)
            })
        },[subcategory])

    return (
        <div className="space-y-4 my-12 lg:px-96">
            {
                items.map(item=> <SingleFilteredItem key={item._id} item={item}></SingleFilteredItem>)
            }
        </div>
    );
};

export default FilteredSubCategory;