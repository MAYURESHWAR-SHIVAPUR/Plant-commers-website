import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Product from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/Contact",
    element: <Contact />
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