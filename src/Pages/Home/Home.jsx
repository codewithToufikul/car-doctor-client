import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import OurInfo from "../../Component/OurInfo/OurInfo";
import Servies from "../../Component/Servies/Servies";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" my-16">
            <About></About>
            </div>
            <Servies></Servies>
            <OurInfo></OurInfo>
        </div>
    );
};

export default Home;