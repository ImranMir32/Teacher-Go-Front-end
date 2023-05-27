import React, { useState, useEffect } from "react";
import "../styles/Dashboard/dashboard.css";

import { demoNotification } from "../components/TeacherDashboardComponents/utils";

import Notification from "../components/TeacherDashboardComponents/Notification";
import DriverList from "../components/AdminDashboardComponents/DriverList";
import ResetPassword from "../components/DriverDashboardComponents/ResetPassword";
import MyDriver from "../components/TeacherDashboardComponents/MyDriver";
import DriverProfile from "../components/DriverDashboardComponents/DriverProfile";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const DriverDashboard = () => {
  const [Page, setPage] = useState("Profile");
  const [Notify, setNotify] = useState(0);
  useEffect(() => {
    setNotify(demoNotification.length);
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

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

            {/* <p
              onClick={() => {
                handleButtonClick("Driver List");
              }}
              className={Page === "Driver List" ? "cp-p-active" : "cp-p"}
            >
              Driver List
            </p> */}

            <p
              onClick={() => {
                setNotify(0);
                handleButtonClick("Notification");
              }}
              className={Page === "Notification" ? "cp-p-active" : "cp-p"}
            >
              Notification {"   "} {Notify ? <sup>new</sup> : ""}
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
              {Page === "My Driver" && <MyDriver />}
              {Page === "Driver List" && <DriverList />}
              {Page === "Notification" && <Notification />}
              {Page === "Reset Password" && <ResetPassword />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
