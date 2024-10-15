import React from "react";
import OnboardingPage1 from "./pages/OnboardingPage1";
import UpdateProfile from "./pages/UpdateProfile";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import HostelAccommodation from "./pages/HostelAccomodation";
import OnboardingPage2 from "./pages/OnboardingPage2";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import EventsPage from "./pages/Events";
import Event from "./pages/Event";
import MainPage from "./pages/MainPage";
import Sponsors from "./pages/Sponsors";
const Login = React.lazy(() => import("./pages/Login"));

const routes = [
  { path: "/home", element: <MainPage />, private: true }, 
  { path: "/", element: <OnboardingPage1 /> },
  { path: "/onboarding2", element: <OnboardingPage2 /> },
  { path: "/updateProfile", element: <UpdateProfile />, private: true }, 
  { path: "/profile", element: <Profile />, private: true },             
  { path: "/hostelAccomodation", element: <HostelAccommodation />, private: true }, 
  { path: "/test", element: <Test /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/verifyEmail", element: <VerifyEmail /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/sponsors", element: <Sponsors /> },
  { path: "/event", element: <Event />,private:true },
];

export default routes;
