import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<Register/>
    },
    {
        path:"/Login",
        element:<Login/>
    }
])

export default routes;