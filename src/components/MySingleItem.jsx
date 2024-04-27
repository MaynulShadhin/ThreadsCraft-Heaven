import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MySingleItem = ({ item,setItems }) => {
    const { _id, name, subcategory, description, price, rating, customization, time, stock, image } = item

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/singleItem/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setItems(prevItems => prevItems.filter(item => item._id !== _id));
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center card card-side bg-base-100 shadow-xl p-4 border-2">
                <div className='md:flex-1'><figure><img className='h-[200px] md:h-[270px] lg:h-[400px] object-cover rounded-lg' src={image} alt="Movie" /></figure></div>
                <div className="card-body md:flex-1">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'>{subcategory}</p>
                    <p className='text-gray-600'>{description}</p>
                    <p><span className="font-semibold">Price:</span> {price}$</p>
                    <p><span className="font-semibold">Rating:</span> {rating}</p>
                    <p><span className="font-semibold">Customization:</span> {customization}</p>
                    <p><span className="font-semibold">Processing Time:</span> {time}</p>
                    <p><span className="font-semibold">Stock Status:</span> {stock}</p>
                    <div className='space-x-4 mt-4'>
                        <Link to={`/updateItem/${item._id}`}>
                            <button className='bg-amber-300 px-2 py-1 rounded-md font-semibold hover:bg-amber-200'>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className='bg-red-600 px-2 py-1 rounded-md font-semibold hover:bg-red-500 text-white'>Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

MySingleItem.propTypes = {
    item: PropTypes.object,
    setItems: PropTypes.func
}

export default MySingleItem;