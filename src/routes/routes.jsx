import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import AddBill from "../components/user/main/addBill/AddBill";
import UpdateBills from "../components/user/main/updateBills/UpdateBills";
import FilterBill from "../components/user/main/filterBill/FilterBill";

let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>

    },{
        path:"/",
        element:<Login/>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home />
            },{
                path:"about",
                element:<About />
            },{
                path:"addBills",
                element:<AddBill />
            },{
                path:"FilterBills",
                element:<FilterBill/>
            },{
                path:"updateBills",
                element:<UpdateBills />
            }
        ]
    }
])

export default routes