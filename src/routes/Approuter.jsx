import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages/LandingPage/landingPage";
import Product from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Loading from "../pages/Loading/Loading";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Info from "../components/Info/Info";
import Orders from "../components/Orders/Orders";
import Address from "../components/Address/Address";
import Settings from "../components/Settings/Settings";
import Cart from "../pages/Cart/Cart";
import Nav from "../components/Nav_Bar/Nav_Bar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/Cart",
    element:
      <div>
        <Nav />
        <Cart />
      </div>
  },
  {
    path: "/Contact",
    element: <Contact />
  }, {
    path: "/loading",
    element: <Loading />
  }, {
    path: "/login",
    element: <Login />
  }, {
    path: "/register",
    element: <Register />

  }, {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <Info />
      },
      {
        path: "/profile/info",
        element: <Info />
      },
      {
        path: "/profile/orders",
        element: <Orders />
      },
      {
        path: "/profile/addresses",
        element: <Address />
      },
      {
        path: "/profile/settings",
        element: <Settings />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


const Approuter = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Approuter;