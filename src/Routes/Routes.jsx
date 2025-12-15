import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../Pages/Homepage/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router=createBrowserRouter([
    //Routes for Main Layout
    {path:'/', element:<Rootlayout></Rootlayout>,
        children:[
           {path:'/', element:<Home></Home>},
           {path:'/coverage', element:<Coverage></Coverage>}
        ]
    }
])