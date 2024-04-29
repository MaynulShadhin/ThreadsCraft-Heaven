import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import CraftItems from "../components/CraftItems";
import Subcategories from "../components/Subcategories";
import ThingsYouLove from "../components/ThingsYouLove";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="pb-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ThreadsCraft-Haven | Home</title>
            </Helmet>
           <Banner></Banner>
           <CraftItems></CraftItems>
           <Subcategories></Subcategories>
           <ThingsYouLove></ThingsYouLove>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;