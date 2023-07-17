import { React, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Dashboard/components.css";
import demo from "../../assets/demo.webp";
// import sir from "../../assets/imtiaz_sir.jpg";
// import olin from "../../assets/olin.jpg";

const TeacherList = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/teachers`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setTeacherList(res.data.teachers);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/teachers`)
      .then((res) => {
        console.log("data--->", res.data.teachers);
        setTeacherList(res.data.teachers);
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
        {teacherList.map((teacher, index) => (
          <div className="list-details" key={teacher.id}>
            <h1>{index + 1}</h1>
            <div className="request-all-details">
              <img src={demo} alt="imran" />
            </div>
            <div className="request-all-details">
              <div>
                {teacher.isTeacherWillGo === false ? (
                  <p className="status-p">ABSENT</p>
                ) : (
                  <p className="status-a">ACTIVE</p>
                )}
                <p>Name : {teacher.name}</p>
                <p>Phone : {teacher.phone}</p>
                <p>Teacher Id : {teacher.id}</p>
                <p>Route : UITS-Rampura</p>
                <p>Mail : {teacher.email}</p>
              </div>
            </div>
            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button
                    className="button-c"
                    onClick={() => {
                      CencelRequest(teacher._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
