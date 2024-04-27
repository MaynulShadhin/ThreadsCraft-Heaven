import { useContext } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;