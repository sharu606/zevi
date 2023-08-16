import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import WishList from "../components/WishList/WishList";
import Bag from "../components/Bag/Bag";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/bag", element: <Bag /> },
  { path: "/:id", element: <ProductDetails /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
