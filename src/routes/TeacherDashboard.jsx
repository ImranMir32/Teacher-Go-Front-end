import React, { useState, useEffect } from "react";
import "../styles/Dashboard/dashboard.css";

// import { demoNotification } from "../components/TeacherDashboardComponents/utils";

import TeacherProfile from "../components/TeacherDashboardComponents/TeacherProfile";
import TeacherStatus from "../components/TeacherDashboardComponents/TeacherStatus";
import DriverList from "../components/AdminDashboardComponents/DriverList";
import ResetPassword from "../components/TeacherDashboardComponents/ResetPassword";
import MyDriver from "../components/TeacherDashboardComponents/MyDriver";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const TeacherDashboard = () => {
  const [Page, setPage] = useState("Profile");
  // const [Notify, setNotify] = useState(0);
  // useEffect(() => {
  //   setNotify(demoNotification.length);
  //   window.scrollTo(0, 0); // scroll to the top of the page
  // }, []);

  const handleButtonClick = (param) => {
    setPage(param);
  };

  return (
    <div>
      <div className="cp-container">
        <div className="cp-topic-name">
          <h2>Teacher Dashboard</h2>
          <div className="cp-content">
            <p
              onClick={() => {
                handleButtonClick("Profile");
              }}
              className={Page === "Profile" ? "cp-p-active" : "cp-p"}
            >
              Profile
            </p>

            <p
              onClick={() => {
                handleButtonClick("My Driver");
              }}
              className={Page === "My Driver" ? "cp-p-active" : "cp-p"}
            >
              My Driver
            </p>

            <p
              onClick={() => {
                handleButtonClick("Driver List");
              }}
              className={Page === "Driver List" ? "cp-p-active" : "cp-p"}
            >
              Driver List
            </p>

            <p
              onClick={() => {
                handleButtonClick("Teacher Status");
              }}
              className={Page === "Teacher Status" ? "cp-p-active" : "cp-p"}
            >
              Status
            </p>

            <p
              onClick={() => {
                handleButtonClick("Reset Password");
              }}
              className={Page === "Reset Password" ? "cp-p-active" : "cp-p"}
            >
              Reset Password
            </p>

            <p
              onClick={() => {
                window.location.href = "/";
              }}
              className={Page === "Log Out" ? "cp-p-active" : "cp-p"}
            >
              Log Out
            </p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="cp-topic-details-scrollview">
          <h1>
            {/* {Page}
            {" :"} */}
          </h1>
          <div className="scrollable-section">
            <div className="cp-topic-details">
              {Page === "Profile" && <TeacherProfile />}
              {Page === "My Driver" && <MyDriver />}
              {Page === "Driver List" && <DriverList />}
              {Page === "Teacher Status" && <TeacherStatus />}
              {Page === "Reset Password" && <ResetPassword />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
