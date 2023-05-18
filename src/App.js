import React from "react";
// import Home from "./routes/SignupForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.page.jsx";
import SignupForm from "./routes/SignupForm";
// import CpGuide from "./routes/CP-Guide";
// import SigninForm from "./routes/SigninForm";
// import SignupForm from "./routes/SignupForm";
// import TermsPrivacy from "./routes/Terms-Privacy";
// import ContactUs from "./routes/ContactUs";
// import Challenges from "./routes/Challenges";
// import Quiz from "./routes/Quiz";
// import AboutUs from "./routes/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupForm />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/signin",
  //   element: <SigninForm />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignupForm />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/cpguide",
  //   element: <CpGuide />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/challenge",
  //   element: <Challenges />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/quiz",
  //   element: <Quiz />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/about-us",
  //   element: <AboutUs />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/term&privacy",
  //   element: <TermsPrivacy />,
  //   errorElement: <ErrorPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
