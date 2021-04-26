import React from "react";
import { IRoute } from "../common/interfaces/route.interface";
import Home from "../pages/home/home.page";
import ProductDetails from '../pages/product-details/product-details.page';

const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/product/:productId',
    component: ProductDetails,
  }
];


export default routes;
