import { React, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Dashboard/components.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Request = () => {
  const [requestTeacher, setRequestTeacher] = useState([]);
  const [requestDriver, setRequestDriver] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/admin/teachers-request`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setRequestTeacher(res.data.teachers);
      })
      .catch((err) => console.log(err, "it has an error"));

    axios
      .get(`http://localhost:8000/api/v1/admin/drivers-request`)
      .then((res) => {
        console.log("data--->", res.data);
        setRequestDriver(res.data.drivers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/admin/teachers-request`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setRequestTeacher(res.data.teachers);
      })
      .catch((err) => console.log(err, "it has an error"));

    axios
      .get(`http://localhost:8000/api/v1/admin/drivers-request`)
      .then((res) => {
        console.log("data--->", res.data);
        setRequestDriver(res.data.drivers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [load]);

  const ApproveRequest = (_id) => {
    axios
      .patch(`http://localhost:8000/api/v1/admin/approve/${_id}`)
      .then((res) => {
        console.log("accepted");
        setLoad(!load);
      })
      .catch((err) => console.log(err, "it has an error"));
  };

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
        {/* <div className="request-container" id="mySection"> */}
        {requestTeacher.map((request) => (
          <div className="request-details-teacher">
            <div className="request-all-details">
              <div>
                <h3>Teacher</h3>
                <div>
                  <div key={request.teacher_id}>
                    <p>Name : {request.name}</p>
                    <p>Teacher Id : {request.id}</p>
                    <p>Mail : {request.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button
                    className="button"
                    onClick={() => {
                      ApproveRequest(request._id);
                    }}
                  >
                    Approve
                  </button>
                </div>
                <div className="req-div-button">
                  <button
                    className="button"
                    onClick={() => {
                      CencelRequest(request._id);
                    }}
                  >
                    Cencel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>

      <div className="request-container" id="mySection">
        {/* <div className="request-container" id="mySection"> */}
        {requestDriver.map((request) => (
          <div className="request-details">
            <div className="request-all-details">
              <div>
                <h3>Driver</h3>
                <div>
                  <div key={request.teacher_id}>
                    <p>Name : {request.name}</p>
                    <p>Phone :{request.phone}</p>
                    <p>Mail : {request.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button
                    className="button"
                    onClick={() => {
                      ApproveRequest(request._id);
                    }}
                  >
                    Approve
                  </button>
                </div>
                <div className="req-div-button">
                  <button
                    className="button"
                    onClick={() => {
                      CencelRequest(request._id);
                    }}
                  >
                    Cencel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Request;
