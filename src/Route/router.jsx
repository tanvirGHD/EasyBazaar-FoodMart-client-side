import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../components/VerifyUser/Register";
import Login from "../components/VerifyUser/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
              path:'/',
              element: <Home></Home>
            }, 
            {
              path:'register',
              element: <Register></Register>
            }, 
            {
              path:'login',
              element: <Login></Login>
            } 
        ]
    },
  ]);

export default router;