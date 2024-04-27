import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/FirebaseProvider";
import MySingleItem from "../components/MySingleItem";

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext) || {}
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/item/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [user])

    return (
        <div className="border-2 border-amber-500 m-8 p-4 lg:mx-80">
            <h2 className="text-center text-3xl font-bold mb-8">My Art And Craft</h2>
            <div className="grid grid-cols-1 gap-8">
                {
                    items.map(item => <MySingleItem key={item._id} item={item} setItems={setItems}></MySingleItem>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;