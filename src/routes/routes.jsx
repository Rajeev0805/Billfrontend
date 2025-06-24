import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import About from "../components/user/main/about/About";
import AddBill from "../components/user/main/addBill/AddBill";
import FilterBill from "../components/user/main/filterBill/FilterBill";
import Home from "../components/user/main/home/Home";

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
        element : <Main/>,
         children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"About",
                element:<About></About>
            },
            {
                path:"AddBills",
                element:<AddBill></AddBill>
            },
            {
                path:"FilterBills",
                element:<FilterBill></FilterBill>
            }
        ]
    }
])

export default routes;