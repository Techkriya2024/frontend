// src/routes.js
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));

const routes = [{ path: "/", element: <Home /> }];

export default routes;
