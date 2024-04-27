import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/FirebaseProvider";
import MySingleItem from "../components/MySingleItem";

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext) || {}
    const [items, setItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([])

    const handleItemFilter = (filter) => {
        if (filter === 'all') {
            setDisplayItems(items)
        }
        else if (filter === 'yes') {
            const customizationYes = items.filter(item=>item.customization === 'Yes');
            setDisplayItems(customizationYes)
        }
        else if(filter === 'no'){
            const customizationNo = items.filter(item=>item.customization === "No");
            setDisplayItems(customizationNo);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/item/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setDisplayItems(data)
            })
    }, [user])

    return (
        <div className="border-2 border-amber-500 m-8 p-4 lg:mx-80">
            <h2 className="text-center text-3xl font-bold mb-8">My Art And Craft</h2>
            <div className="dropdown mb-4">
                <div tabIndex={0} role="button" className="btn m-1 bg-amber-300 hover:bg-amber-400">Filter-customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={()=>handleItemFilter('all')}>All</button></li>
                    <li><button onClick={()=>handleItemFilter('yes')}>Yes</button></li>
                    <li><button onClick={()=>handleItemFilter('no')}>No</button></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {
                    displayItems.map(item => <MySingleItem key={item._id} item={item} setDisplayItems={setDisplayItems}></MySingleItem>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;