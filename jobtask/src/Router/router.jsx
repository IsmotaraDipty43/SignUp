import {
  createBrowserRouter,
} from "react-router-dom";

import Mainlayout from "../Mainlayout";
import Home from "../PAges.jsx/Home";
import CreateAccount from "../PAges.jsx/CreateAccount";
import Login from "../PAges.jsx/Login";
import Profile from "../PAges.jsx/Profile";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,

      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/creat',
          element:<CreateAccount></CreateAccount>
        },

        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        }
          ]
        },

       
  
   
  ]);




export default router;