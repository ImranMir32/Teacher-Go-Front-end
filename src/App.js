import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.page.jsx";

import SignInForm from "./routes/SignInForm.jsx";
import TeacherSignupForm from "./routes/TeacherSignupForm";
import DriverSignupForm from "./routes/DriverSignupForm.jsx";
import AdminDashboard from "./routes/AdminDashboard.jsx";
import TeacherDashboard from "./routes/TeacherDashboard.jsx";
import DriverDashboard from "./routes/DriverDashboard.jsx";

import { GlobalStateProvider } from "./Context/Global_Context";
import { GlobalMethodsProvider } from "./Context/GlobalMethodsContext";

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
  {
    path: "/teacher-dashboard",
    element: <TeacherDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/driver-dashboard",
    element: <DriverDashboard />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <GlobalStateProvider>
      <GlobalMethodsProvider>
        <RouterProvider router={router} />
      </GlobalMethodsProvider>
    </GlobalStateProvider>
  );
}

export default App;
