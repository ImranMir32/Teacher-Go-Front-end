import React, { useState } from "react";
import "../styles/Dashboard/dashboard.css";
import Request from "../components/AdminDashboardComponents/Request";

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
                handleButtonClick("Driver");
              }}
              className={Page === "Driver" ? "cp-p-active" : "cp-p"}
            >
              Driver
            </p>

            <p
              onClick={() => {
                handleButtonClick("Teacher");
              }}
              className={Page === "Teacher" ? "cp-p-active" : "cp-p"}
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

            <p
              onClick={() => {
                handleButtonClick("Teacher Road");
              }}
              className={Page === "Teacher Road" ? "cp-p-active" : "cp-p"}
            >
              Teacher Road
            </p>

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
                handleButtonClick("Array");
              }}
              className={Page === "Array" ? "cp-p-active" : "cp-p"}
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
              {/*{Page === "Data Types and Variables" && <DataTypes />}
              {Page === "Operators and Expressions" && <OperatorsExpressions />}
              {Page === "If Else" && <IfElse />}
              {Page === "Input/Output" && <InputOutput />}
              {Page === "Loops" && <LoopInfo />}
              {Page === "Array" && <ArrayInfo />}
              {Page === "String" && <StringInfo />}
              {Page === "Function" && <FunctionInfo />}
              {Page === "Recursion" && <RecursionInfo />}
              {Page === "Time complexity and Big O notation" && (
                <TimeComplexity />
              )}
              {Page === "Bit manipulation" && <BitManipulation />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
