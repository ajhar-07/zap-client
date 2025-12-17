import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Homepage/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Loginpage from "../Pages/AuthPages/Loginpage";
import Registerpage from "../Pages/AuthPages/Registerpage";
import Privateroutes from "./Privateroutes";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router=createBrowserRouter([
    //Routes for Main Layout
    {path:'/', element:<Rootlayout></Rootlayout>,
        children:[
           {path:'/', element:<Home></Home>},
           {path:'/coverage', element:<Privateroutes><Coverage></Coverage></Privateroutes>},
           {path:'/send-a-parcel', element:<Privateroutes><SendParcel></SendParcel></Privateroutes>},
           {path:'/login', element:<Loginpage></Loginpage>},
           {path:'/register', element:<Registerpage></Registerpage>},
           
        ]
    },
    {path:'/be-a-rider', element:<Privateroutes><Rider></Rider></Privateroutes>}

])