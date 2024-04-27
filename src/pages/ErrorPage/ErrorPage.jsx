import { Link } from "react-router-dom";
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <img className="container mx-auto  lg:w-2/4" src={error} alt="" />
            <Link to="/" className="btn mt-4">Go Back</Link>
        </div>
    );
};

export default ErrorPage;