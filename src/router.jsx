import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './componets/signup/Signup.jsx';
import UserOwner from './componets/UserOwner/UserOwner.jsx';
import Login from './componets/login/Login.jsx';



 const router = createBrowserRouter([
    {path: "/" , element: <App/> },
    {path: "/Getstarted" , element: <UserOwner/>},
    {path: "/Signup/:userType" , element:<Signup/>} ,
    {path: "/Login" , element: <Login/> }
    
  ]);

  export default router;