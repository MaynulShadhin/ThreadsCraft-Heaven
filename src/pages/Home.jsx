import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import CraftItems from "../components/CraftItems";
import ThingsYouLove from "../components/ThingsYouLove";

const Home = () => {
    return (
        <div className="bg-amber-50 pb-8">
           <Banner></Banner>
           <CraftItems></CraftItems>
           <ThingsYouLove></ThingsYouLove>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;