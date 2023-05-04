import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../registration/Login/Login";
import Register from "../registration/Register/Register";
import DetailsLayout from "../layouts/DetailsLayout";
import CartDetails from "../CartDetails/CartDetails";
import Error from "../Home/Shared/Error/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-server-remontripura.vercel.app/chefdata')
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/',
    element: <DetailsLayout></DetailsLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/details/:id',
        element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-server-remontripura.vercel.app/chefdata/${params.id}`)

      }
    ]
  }
]);

export default router;