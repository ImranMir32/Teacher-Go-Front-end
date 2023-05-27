import React, { useEffect } from "react";
import "../../styles/Dashboard/profile.css";
import "../../styles/Dashboard/updateForm.css";
import rafi from "../../assets/rafi.jpg";

// import { Link } from "react-router-dom";

const MyDriver = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  return (
    <div>
      <div className="card-container">
        <div className="profile-image-container">
          <img className="profile-image" src={rafi} alt="Profile" />
        </div>

        <div className="info-container">
          <p>Name : Tanvir Hasan​</p>
          <p>Phone Number : 01911111111</p>
          <p>Driver Id : 19446510001</p>
          <p>Route : Campus-Rampura</p>
          <p>Email : tanvirhasan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyDriver;
