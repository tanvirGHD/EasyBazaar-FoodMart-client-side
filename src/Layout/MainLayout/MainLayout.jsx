import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="">
            <Outlet></Outlet>
            </div>
            <div className="mt-36">
            <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;