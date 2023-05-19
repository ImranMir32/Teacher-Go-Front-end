import React, { useState } from "react";
import "../styles/Dashboard/dashboard.css";
import Request from "../components/AdminDashboardComponents/Request";
import DriverList from "../components/AdminDashboardComponents/DriverList";
import TeacherList from "../components/AdminDashboardComponents/TeacherList";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [Page, setPage] = useState("Account Request");

  const handleButtonClick = (param) => {
    setPage(param);
  };

  return (
    <div>
      <div className="cp-container">
        <div className="cp-topic-name">
          <h2>Admin Dashboard</h2>
          <div className="cp-content">
            <p
              onClick={() => {
                handleButtonClick("Account Request");
              }}
              className={Page === "Account Request" ? "cp-p-active" : "cp-p"}
            >
              Account Request
            </p>

            <p
              onClick={() => {
                handleButtonClick("Driver List");
              }}
              className={Page === "Driver List" ? "cp-p-active" : "cp-p"}
            >
              Driver
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
                handleButtonClick("Driver Road");
              }}
              className={Page === "Driver Road" ? "cp-p-active" : "cp-p"}
            >
              Driver Road
            </p>

            {/* <p
              onClick={() => {
                handleButtonClick("Teacher Road");
              }}
              className={Page === "Teacher Road" ? "cp-p-active" : "cp-p"}
            >
              Teacher Road
            </p> */}

            <p
              onClick={() => {
                handleButtonClick("Notify Teacher");
              }}
              className={Page === "Notify Teacher" ? "cp-p-active" : "cp-p"}
            >
              Notify Teacher
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
          <h1>{Page}</h1>
          <div className="scrollable-section">
            <div className="cp-topic-details">
              {Page === "Account Request" && <Request />}
              {Page === "Driver List" && <DriverList />}
              {Page === "Teacher List" && <TeacherList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
