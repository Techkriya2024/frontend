// src/routes.js
import React from "react";
import Gallery from "./components/Gallery";
import XShapeScrollingTracks from "./components/EventSlider";
import EventLayout from "./components/EventLayout";

const Home = React.lazy(() => import("./pages/Home"));
const EventPage = React.lazy(() => import("./pages/EventPage"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/events", element: <EventPage/> },
  { path: "/gallery", element: <Gallery/> },
  { path: "/eventslider", element: <XShapeScrollingTracks/>},
  { path: "/eventlayout", element: <EventLayout/>},
];

export default routes;

// <Route path="/" element={<ButtonRow />} />
// <Route path="/home" element={<h1>Home Page</h1>} />
// <Route path="/about" element={<h1>About Page</h1>} />
