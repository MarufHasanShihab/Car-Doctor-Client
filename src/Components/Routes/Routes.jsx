import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home";
import SignUp from "../../Pages/SignUp";
import Login from "../../Pages/Login";
import CheckOut from "../../Pages/CheckOut";
import PrivateRoutes from "./PrivateRoutes";
import Bookings from "../../Pages/Bookings";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/check-out/:id",
                element:<PrivateRoutes><CheckOut/></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"/bookings",
                element:<PrivateRoutes><Bookings/></PrivateRoutes>
            }
        ]
    },
    {
        path:"/sign-up",
        element:<SignUp/>
    },
    {
        path:"/login",
        element: <Login/>
    }
]);

export default router