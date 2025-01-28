import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-screen">
            <Outlet></Outlet>
            </div>
            {/* <div className="mt-36">
            <Footer></Footer>
            </div> */}
        </div>
    );
};

export default MainLayout;