import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFilteredItem from "../components/SingleFilteredItem";
import { Helmet } from "react-helmet";

const FilteredSubCategory = () => {
    const [items, setItems] = useState([])
    const { subcategory } = useParams()

    useEffect(() => {
        fetch(`https://thread-crafts-haven-server.vercel.app/subcategory/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
    }, [subcategory])

    return (
        <div className="space-y-4 my-12 lg:px-96">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ThreadCrafts-Haven | Art and Craft Subcategory</title>
            </Helmet>
            {
                items.map(item => <SingleFilteredItem key={item._id} item={item}></SingleFilteredItem>)
            }
        </div>
    );
};

export default FilteredSubCategory;