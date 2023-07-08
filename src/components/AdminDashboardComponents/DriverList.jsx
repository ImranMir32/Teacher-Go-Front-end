import { React, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Dashboard/components.css";
import demo from "../../assets/demo.webp";
// import likhon from "../../assets/likhon.jpg";
// import rafi from "../../assets/rafi.jpg";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const DriverList = () => {
  const [driverList, setDriverList] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setDriverList(res.data.drivers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setDriverList(res.data.drivers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [load]);

  const CencelRequest = (_id) => {
    axios
      .delete(`http://localhost:8000/api/v1/admin/remove/${_id}`)
      .then((res) => {
        console.log("accepted");
        setLoad(!load);
      })
      .catch((err) => console.log(err, "it has an error"));
  };

  return (
    <div>
      <div className="request-container" id="mySection">
        {driverList.map((driver) => (
          <div className="list-details">
            <div className="request-all-details">
              {/* <p>{demoTeacherList.image}</p> */}
              <img src={demo} alt="imran" />
            </div>
            <div className="request-all-details">
              <div>
                {/* <h3>{demoRequest.account_type}</h3> */}
                {/* {teacher.teachers.map((details) => ( */}
                <div>
                  <p>Name : {driver.name}</p>
                  <p>Phone : {driver.phone}</p>
                  {/* <p>Teacher Id : {driver.id}</p> */}
                  <p>Route : {driver.route}</p>
                  <p>Mail : {driver.email}</p>
                </div>
                {/* ))} */}
              </div>
            </div>
            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button
                    className="button-c"
                    onClick={() => {
                      CencelRequest(driver._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default DriverList;
