import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            
        ]
    },
  ]);

export default router;