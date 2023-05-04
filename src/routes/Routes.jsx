import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../registration/Login/Login";
import Register from "../registration/Register/Register";
import DetailsLayout from "../layouts/DetailsLayout";
import CartDetails from "../CartDetails/CartDetails";
import Error from "../Home/Shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefdata')
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
        element: <CartDetails></CartDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefdata/${params.id}`)

      }
    ]
  }
]);

export default router;