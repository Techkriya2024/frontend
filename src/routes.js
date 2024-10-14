// src/routes.js
import React from "react";
import Events from "./pages/Events";
import Event from "./pages/Event";

const Home = React.lazy(() => import("./pages/Home"));

const routes = [
    { path: "/", element: <Home /> },
    { path: "/events", element: <Events /> },
    { path: "/event", element: <Event /> },

];

export default routes;
