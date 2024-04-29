import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const SingleSubcategory = ({ subCat }) => {
    const { image, subcategory } = subCat
    return (
        <div>
            <Link to={`/subcategory/${subcategory}`}>
                <Fade>
                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-amber-50 dark:text-gray-900">
                        <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <h2 className="text-xl font-semibold tracking-wide">{subcategory}</h2>
                        </div>
                    </div>
                </Fade>
            </Link>
        </div>
    );
};
SingleSubcategory.propTypes = {
    subCat: PropTypes.object
}
export default SingleSubcategory;