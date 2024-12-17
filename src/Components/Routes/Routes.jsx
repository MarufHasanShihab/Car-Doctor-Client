import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home";
import SignUp from "../../Pages/SignUp";
import Login from "../../Pages/Login";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
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