import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import "../../styles/Dashboard/components.css";
import demo from "../../assets/demo.webp";
// import rafi from "../../assets/rafi.jpg";
// import likhon from "../../assets/likhon.jpg";
import { GlobalStateContext } from "../../Context/Global_Context";

const DriverList = () => {
  const [driverList, setDriverList] = useState([]);
  const [load, setLoad] = useState(false);
  const { show } = useContext(GlobalStateContext);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        console.log("data--->", res.data);
        setDriverList(res.data.drivers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        console.log("data--->", res.data);
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
        {driverList.map((driver, index) => (
          <div className="list-details">
            <h1>{index + 1}</h1>
            <div className="request-all-details">
              {/* <p>{demoTeacherList.image}</p> */}

              <img src={demo} alt="profile" />
            </div>
            <div className="request-all-details">
              <div>
                {/* <h3>{demoRequest.account_type}</h3> */}
                {/* {teacher.teachers.map((details) => ( */}
                <div>
                  {driver.isDriverOk === false ? (
                    <p className="status-p">ABSENT</p>
                  ) : (
                    <p className="status-a">ACTIVE</p>
                  )}
                  <p>Name : {driver.name}</p>
                  <p>Phone : {driver.phone}</p>
                  {/* <p>Teacher Id : {driver.id}</p> */}

                  <p>Route : {driver.routeId}</p>

                  <p>Mail : {driver.email}</p>
                </div>
                {/* ))} */}
              </div>
            </div>
            {show && (
              <div>
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
            )}
          </div>
          // </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default DriverList;
