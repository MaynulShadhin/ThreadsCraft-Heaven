import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/FirebaseProvider";

const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext) || {}

    useEffect(() => {
        fetch(`http://localhost:5000/item/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }, [])

    return (
        <div className="border-2 border-amber-500 m-8 p-4">
            <h2 className="text-center text-3xl font-bold">My Art And Craft</h2>
        </div>
    );
};

export default MyArtAndCraft;