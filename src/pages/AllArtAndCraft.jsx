import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
    const items = useLoaderData()

    return (
        <div className="border-2 border-amber-500 m-8 p-4">
            <h1 className="text-3xl text-center font-bold mb-8">All Arts And Crafts</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Sub-Category</th>
                            <th>In Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.subcategory}</td>
                                <td>{item.stock}</td>
                                <td><Link to={`/itemDetails/${item._id}`}><button className="btn btn-sm btn-ghost">View Details</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;