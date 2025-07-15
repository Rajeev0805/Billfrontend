import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import About from "../components/user/main/about/About";
import AddBill from "../components/user/main/addBill/AddBill"
import UpdateBills from "../components/user/main/updateBills/UpdateBills";
import FilterBills from "../components/user/main/filterBill/FilterBill";
import ViewBills from "../components/viewBill/ViewBill";
import PrivateRoute from "../components/helper/PrivateRoute";


let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>

    },{
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<PrivateRoute><Main></Main></PrivateRoute>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"about",
                element:<About></About>
            },{
                path:"addBills",
                element: <AddBill />
            },{
                path:"filterBills",
                element:<FilterBills/>
            },{
                path:"updateBills",
                element:<UpdateBills></UpdateBills>
            },{
                path:"viewBills",
                element:<ViewBills/>
            }
        ]
    }
])

export default routes