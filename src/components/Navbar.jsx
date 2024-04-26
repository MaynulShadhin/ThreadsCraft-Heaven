import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-xl mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-xl mr-4 font-semi-bold hover:text-orange-500 pb-2"}>Home</NavLink>
        <NavLink to="/All Art & craft Items" className={({ isActive }) => isActive ? "text-xl mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-xl mr-4 font-semi-bold hover:text-orange-500 pb-2"}>All Art & craft Items</NavLink>
    </>

    return (
        <div className="navbar bg-amber-300 px-0 md:px-8 py-0 md:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 space-y-2 pb-2">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold">ThreadCrafts-Haven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <Link to="/register"><button className="btn">Sign Up</button></Link>
                <Link to="/login"><button className="btn">Sign In</button></Link>

            </div>
        </div>
    );
};

export default Navbar;