// src/routes.js
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const VerifyMail = React.lazy(() => import("./pages/VerifyMail"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));

const routes = [{ path: "/", element: <Home /> },
                {path: "/VerifyMail" , element: <VerifyMail/>},
                {path:"/ForgetPassword",element: <ForgetPassword/>}];

export default routes;
