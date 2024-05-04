import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer/Footer";
import Navbar from "../Component/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className=" max-w-[1140px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;