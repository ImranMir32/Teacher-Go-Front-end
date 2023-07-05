import React, { useState } from "react";
import "../styles/Dashboard/dashboard.css";

import ResetPassword from "../components/DriverDashboardComponents/ResetPassword";

import DriverProfile from "../components/DriverDashboardComponents/DriverProfile";
import MyTeacherList from "../components/DriverDashboardComponents/MyTeacherList";
import TeacherStatus from "../components/TeacherDashboardComponents/TeacherStatus";

const DriverDashboard = () => {
  const [Page, setPage] = useState("Profile");

  const handleButtonClick = (param) => {
    setPage(param);
  };

  return (
    <div>
      <div className="cp-container">
        <div className="cp-topic-name">
          <h2>Driver Dashboard</h2>
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
                handleButtonClick("My Teacher List");
              }}
              className={Page === "My Teacher List" ? "cp-p-active" : "cp-p"}
            >
              My Teacher List
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
              {Page === "Profile" && <DriverProfile />}
              {Page === "My Teacher List" && <MyTeacherList />}
              {Page === "Teacher Status" && <TeacherStatus />}
              {Page === "Reset Password" && <ResetPassword />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
