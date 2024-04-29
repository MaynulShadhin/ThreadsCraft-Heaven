import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const SingleItem = ({ item }) => {
    return (
        <Fade direction='up'>
            <div className="mx-4 rounded-md shadow-md dark:bg-amber-50 dark:text-gray-800 h-full">
                <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                        <p className="dark:text-gray-800">{item.description}</p>
                        <p className="dark:text-gray-800"><span className='font-bold'>Price: </span>{item.price}$</p>

                    </div>
                    <Link to={`/itemDetails/${item._id}`}>
                        <button className='bg-amber-300 font-semibold w-full py-3 rounded-lg'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </Fade>
    );
};

SingleItem.propTypes = {
    item: PropTypes.object
}

export default SingleItem;