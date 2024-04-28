import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/FirebaseProvider";
import DarkMode from "./DarkMode";

const Navbar = () => {
    const { logout, user } = useContext(AuthContext)

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-lg mr-4 font-semi-bold hover:text-orange-500 pb-2"}>Home</NavLink>
        <NavLink to="/All Art & craft Items" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-lg mr-4 font-semi-bold hover:text-orange-500 pb-2"}>All Art & craft Items</NavLink>
        <NavLink to="/Add Craft Item" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-lg mr-4 font-semi-bold hover:text-orange-500 pb-2"}>Add Craft Item</NavLink>
        {
            user && <NavLink to="/myArtAndCraft" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-orange-500 text-orange-500 pb-2" : "text-lg mr-4 font-semi-bold hover:text-orange-500 pb-2"}>My Art and Craft</NavLink>
        }
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

            <div className="navbar-end">
                {/* toggle mode */}
                <div className="mr-2">
                    <DarkMode></DarkMode>
                </div>


                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-11 rounded-full">
                                <img title={user?.displayName} src={user?.photoURL || "https://i.ibb.co/Wyry2pC/user.png"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                        :
                        <div className="flex space-x-2">
                            <Link to="/register"><button className="btn">Sign Up</button></Link>
                            <Link to="/login"><button className="btn">Sign In</button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;