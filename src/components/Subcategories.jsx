import { useEffect, useState } from "react";
import SingleSubcategory from "./SingleSubcategory";

const Subcategories = () => {
    const [subCats, setSubCats] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/subcategory')
            .then(res => res.json())
            .then(data => {
                setSubCats(data)
            })
    }, [])

    return (
        <div className="mx-auto container mt-12">
            <h2 className="text-5xl font-bold text-center mb-8">Art & Craft Categories:{subCats.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    subCats.map(subCat => <SingleSubcategory key={subCat._id} subCat={subCat}></SingleSubcategory>)
                }
            </div>
        </div>
    );
};

export default Subcategories;