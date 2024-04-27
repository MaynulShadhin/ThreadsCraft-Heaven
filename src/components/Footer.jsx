import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { TbNeedleThread } from "react-icons/tb";
const Footer = () => {
    return (
        <footer className="p-10 bg-amber-300 text-neutral-content mt-10">
            <div className="md:flex justify-around w-full p-4">
            <aside>
                <TbNeedleThread className="text-4xl font-bold text-black"></TbNeedleThread>
                <h2 className="text-3xl font-bold text-gray-700 mb-4">ThreadCrafts-Haven</h2>
                <p className="text-gray-700">Where Creativity Meets Community, Quality, and Innovation</p>
            </aside>
            <nav>
                <h6 className="footer-title text-gray-950 text-2xl mt-4 md:mt-0">Social</h6>
                <div className="grid grid-flow-col gap-4 text-black text-2xl">
                   <FaFacebookSquare></FaFacebookSquare>
                   <FaGithub></FaGithub>
                   <FaInstagram></FaInstagram>
                </div>
            </nav>
            </div>
            <h2 className="text-center text-gray-700 font-medium">All Rights Reserved, 2024</h2>
        </footer>
    );
};

export default Footer;