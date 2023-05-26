import React from "react";
// import "../../styles/Dashboard/components.css";
import "../../styles/Dashboard/notification.css";
import { demoNotification } from "./utils";

const Notification = () => {
  return (
    <div>
      <div className="notification-container" id="mySection">
        {demoNotification.map((demoNotification) => (
          <div className="notification-details">
            <div className="notification-all-details">
              <div key={demoNotification.id}>
                <p>Sender : {demoNotification.sender}</p>
                <p>Message: {demoNotification.message}</p>
                <p>Date: {demoNotification.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
