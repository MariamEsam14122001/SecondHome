import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './pages/signup/Signup.jsx';
import UserOwner from './pages/UserOwner/UserOwner.jsx';
import Login from './pages/login/Login.jsx';
import Admin from "./pages/Admin/Admin.jsx";
import SearchResult from "./pages/SearchResults/SerchResults.jsx";

import WishList from "./pages/WishList/WishList.jsx";


 const router = createBrowserRouter([
    {path: "/" , element: <App/> },
    {path: "/Getstarted" , element: <UserOwner/>},
    {path: "/Signup/:userType" , element:<Signup/>} ,
    {path: "/Login" , element: <Login/> },
    {path: "/Admin" , element: <Admin/>},
    {path:"/SearchResult" , element: <SearchResult/>},
    {path:"/wishlist" , element: <WishList/>}
    
  ]);

  export default router;