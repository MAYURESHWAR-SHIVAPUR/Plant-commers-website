import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


const LandingPage = lazy(() => import("../pages/LandingPage/landingPage"));
const Product = lazy(() => import("../pages/Products/Products"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Loading = lazy(() => import("../pages/Loading/Loading"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const Profile = lazy(() => import("../pages/Auth/Profile"));
const Info = lazy(() => import("../components/Profile/Info"));
const Orders = lazy(() => import("../components/Profile/Orders"));
const Address = lazy(() => import("../components/Profile/Address"));
const Settings = lazy(() => import("../components/Profile/Settings"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Nav = lazy(() => import("../components/Nav_Bar/Nav_Bar"));
const Nav_Left = lazy(() => import("../components/Left-Nav/Nav"));

import ProtectedRoute from "./ProtectedRoute";

const Approuter = () => {

  return (
    <BrowserRouter>

      <Suspense fallback={<Loading />} >
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/products" element={<Product />} />

          <Route
            path="/cart"
            element={
              <>
                <Nav />
                <Cart />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="/loading" element={<Loading />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* Protected Route */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Nav_Left />
                <Profile />
              </ProtectedRoute>
            }
          >

            <Route index={true} element={<Info />} />

            <Route path="info" element={<Info />} />

            <Route path="orders" element={<Orders />} />

            <Route path="addresses" element={<Address />} />

            <Route path="settings" element={<Settings />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </Suspense>
    </BrowserRouter>
  )
}

export default Approuter;