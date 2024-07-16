import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Shop from "../components/shop/Shop";
import Main from "../layout/Main";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default route
