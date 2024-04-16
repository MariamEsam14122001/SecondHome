import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './pages/signup/Signup.jsx';
import UserOwner from './pages/UserOwner/UserOwner.jsx';
import Login from './pages/login/Login.jsx';
import Admin from "./pages/Admin/Admin.jsx";
import SearchPage from "./pages/SearchPage/SerchPage.jsx";

import WishList from "./pages/WishList/WishList.jsx";
import { WishlistProvider } from "./Context/WishlistContext.jsx";

 const router = createBrowserRouter([
    {path: "/" , element: <App/> },
    {path: "/Getstarted" , element: <UserOwner/>},
    {path: "/Signup/:userType" , element:<Signup/>} ,
    {path: "/Login" , element: <Login/> },
    {path: "/Admin" , element: <Admin/>},
    {path:"/search" , element: <SearchPage/>},
    {path:"/wishlist" ,  element: <WishlistProvider><WishList /></WishlistProvider> },
    
  ]);

  export default router;