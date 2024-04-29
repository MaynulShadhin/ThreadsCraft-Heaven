import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`https://thread-crafts-haven-server.vercel.app/singleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [id]);

    const { _id, name, subcategory, description, price, rating, customization, time, stock, image } = item

    const handleUpdateItem = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const image = form.image.value;

        const updatedItem = { name, subcategory, description, price, rating, customization, time, stock, image }

        fetch(`https://thread-crafts-haven-server.vercel.app/singleItem/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-amber-50 py-24 px-10 md:px-24 lg:px-96">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Item</title>
            </Helmet>
            <h2 className="text-4xl font-extrabold text-center mb-6">Update Item</h2>
            <form onSubmit={handleUpdateItem}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name"
                                defaultValue={name}
                                placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">subcategory Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={subcategory}
                                name="subcategory" placeholder="Subcategory name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={description}
                                name="description" placeholder="short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={price}
                                name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={rating}
                                name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={customization}
                                name="customization" placeholder="Customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={time}
                                name="time" placeholder="Processing time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                defaultValue={stock}
                                name="stock" placeholder="Stock Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image"
                                defaultValue={image}
                                placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Item" className="btn btn-block bg-amber-300 hover:bg-amber-200" />

            </form>
        </div>
    );
};

export default UpdateItem;