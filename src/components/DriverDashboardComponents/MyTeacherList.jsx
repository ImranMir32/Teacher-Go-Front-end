import { React, useContext, useEffect, useState } from "react";
import "../../styles/Dashboard/components.css";
import demo from "../../assets/demo.webp";
import axios from "axios";
import { GlobalStateContext } from "../../Context/Global_Context";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const MyTeacherList = () => {
  const { user } = useContext(GlobalStateContext);
  const [myTeacher, setMyTeacher] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
    console.log(user.routeId);
    axios
      .get(`http://localhost:8000/api/v1/routes/all-teachers/${user.routeId}`)
      .then((res) => {
        console.log(res.data);
        // setMyTeacher(res.data);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [user.routeId]);

  return (
    <div>
      {/* <div className="request-container" id="mySection">
        {myTeacher.map((teacher, index) => (
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
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MyTeacherList;
