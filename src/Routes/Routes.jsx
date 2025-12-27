import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Homepage/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Loginpage from "../Pages/AuthPages/Loginpage";
import Registerpage from "../Pages/AuthPages/Registerpage";
import Privateroutes from "./Privateroutes";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Dashboardlayout from "../Layouts/Dashboardlayout";
import Myparcels from "../Pages/DashboardPages/Myparcels";
import Payment from "../Pages/DashboardPages/Payment/Payment";
import PaymentSuccess from "../Pages/DashboardPages/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/DashboardPages/Payment/PaymentCancelled";
import Paymenthistory from "../Pages/DashboardPages/Paymenthistory/Paymenthistory";

export const router=createBrowserRouter([
    //Routes for Main Layout
    {path:'/', element:<Rootlayout></Rootlayout>,
        children:[
           {path:'/', element:<Home></Home>},
           {path:'/coverage', element:<Privateroutes><Coverage></Coverage></Privateroutes>},
           {path:'/send-a-parcel', element:<Privateroutes><SendParcel></SendParcel></Privateroutes>,
            loader :()=>fetch('/servicecenter.json'),
           },
           {path:'/login', element:<Loginpage></Loginpage>},
           {path:'/register', element:<Registerpage></Registerpage>},
           
        ]
    },
    {path:'/be-a-rider', element:<Privateroutes><Rider></Rider></Privateroutes>},
    {path:'/dashboard', element:<Dashboardlayout/>,
        children:[
            {path:'/dashboard/my-parcels', element:<Myparcels/>},
            {path:'/dashboard/payment/:id', element:<Payment></Payment>},
            {path:'/dashboard/payment-success', element:<PaymentSuccess></PaymentSuccess>},
            {path:'/dashboard/payment-cancelled', element:<PaymentCancelled/>},
            {path:'/dashboard/payment-hostory', element:<Paymenthistory/>}
        ]
    }

])