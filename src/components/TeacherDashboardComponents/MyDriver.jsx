import React, { useEffect, useContext } from "react";
import "../../styles/Dashboard/profile.css";
import "../../styles/Dashboard/updateForm.css";
import demo from "../../assets/demo.webp";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../Context/Global_Context";

const MyDriver = () => {
  const { user } = useContext(GlobalStateContext);
  const [driverObj, setDriverObj] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
    const str = user.routeId;
    const [, endTo] = str.split("-");
    console.log(endTo);
    axios
      .get(`http://localhost:8000/api/v1/users/get-my-driver/${endTo}`)
      .then((res) => {
        console.log("accepted", res.data.driver);
        setDriverObj(res.data.driver);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [user.routeId]);

  return (
    <div>
      <div className="card-container">
        <div className="profile-image-container">
          <img className="profile-image" src={demo} alt="Profile" />
        </div>

        <div className="info-container">
          <div className="driver-status">
            <p>Name : {driverObj.name}​</p>
            {driverObj?.isDriverOk === true ? (
              <p className="status-a">ACTIVE</p>
            ) : (
              <p className="status-p">ABSENT</p>
            )}
          </div>
          <p>Phone Number : {driverObj.phone}</p>
          {/* <p>Driver Id : 11246510001</p> */}
          <p>Route : {driverObj.routeId}</p>
          <p>Email : {driverObj.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyDriver;
