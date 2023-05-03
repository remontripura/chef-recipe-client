import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../registration/Login/Login";
import Register from "../registration/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
    }
  ]);

  export default router;