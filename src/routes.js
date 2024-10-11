// src/routes.js
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const EventPage = React.lazy(() => import("./pages/EventPage"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/events", element: <EventPage/> }
];

export default routes;

// <Route path="/" element={<ButtonRow />} />
// <Route path="/home" element={<h1>Home Page</h1>} />
// <Route path="/about" element={<h1>About Page</h1>} />
