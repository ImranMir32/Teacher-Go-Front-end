import React, { useState } from "react";
import "../styles/Dashboard/dashboard.css";

import TeacherProfile from "../components/TeacherDashboardComponents/TeacherProfile";
import DriverList from "../components/AdminDashboardComponents/DriverList";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const TeacherDashboard = () => {
  const [Page, setPage] = useState("Profile");

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
                handleButtonClick("Driver List");
              }}
              className={Page === "Driver List" ? "cp-p-active" : "cp-p"}
            >
              Driver List
            </p>

            <p
              onClick={() => {
                handleButtonClick("Teacher List");
              }}
              className={Page === "Teacher List" ? "cp-p-active" : "cp-p"}
            >
              Teacher
            </p>

            <p
              onClick={() => {
                handleButtonClick("Route List");
              }}
              className={Page === "Route List" ? "cp-p-active" : "cp-p"}
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
              {Page === "Driver List" && <DriverList />}
              {/* {Page === "Teacher List" && <TeacherList />} 
              {Page === "Route List" && <Route />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
