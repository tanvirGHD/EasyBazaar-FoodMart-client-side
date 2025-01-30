import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="md:w-10/12 w-10/12 mx-auto">
            <Outlet></Outlet>
            </div>
            <div className="mt-36">
            <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;