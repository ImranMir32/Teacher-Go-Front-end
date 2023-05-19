import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.page.jsx";

import SignInForm from "./routes/SignInForm.jsx";
import TeacherSignupForm from "./routes/TeacherSignupForm";
import DriverSignupForm from "./routes/DriverSignupForm.jsx";
import AdminDashboard from "./routes/AdminDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teacher-signup",
    element: <TeacherSignupForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/driver-signup",
    element: <DriverSignupForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
