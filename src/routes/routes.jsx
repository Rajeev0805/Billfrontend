import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";

let routes=createBrowserRouter([
    {
        path:"/Register",
        element:<Register/>
    },
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Home",
        element : <Main/>
    }
])

export default routes;