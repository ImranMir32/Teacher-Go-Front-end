import React from "react";
// import "../../styles/Dashboard/components.css";
import "../../styles/Dashboard/notification.css";

const TeacherStatus = () => {
  return (
    <div className="notify">
      <button className="in">ACTIVE</button>
      <button className="out">ABSENCE</button>
    </div>
  );
};

export default TeacherStatus;
