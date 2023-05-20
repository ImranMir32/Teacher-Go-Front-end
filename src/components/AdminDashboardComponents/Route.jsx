import React from "react";
import "../../styles/Dashboard/components.css";
// import imran from "../../assets/imran.jpg";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Route = () => {
  //   const [Page, setPage] = useState("Account Request");

  //   const handleButtonClick = (param) => {
  //     setPage(param);
  //   };

  const demoRouteList = [
    {
      id: 1,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 2,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 3,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 4,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 5,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 6,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 7,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 8,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 9,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 10,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 11,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
    {
      id: 12,
      from: "Mohakhali - Campus",
      to: "Campus - Mohakhali",
      driver_name: "Rafi",
    },
  ];

  return (
    <div>
      <div className="request-container" id="mySection">
        {demoRouteList.map((demoRouteList) => (
          <div className="request-details">
            <div className="request-all-details">
              <div key={demoRouteList.id}>
                {/* <h3>{demoRouteList.account_type}</h3>
                {demoRequest.details.map((details) => (
                  <div key={details.teacher_id}> */}
                <h3>Route</h3>
                <p>{demoRouteList.from}</p>
                <p>{demoRouteList.to}</p>
                <p>Driver : {demoRouteList.driver_name}</p>
              </div>
              {/* ))} */}
              {/* </div> */}
            </div>
            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button className="button">Edit</button>
                </div>
                {/* <div className="req-div-button">
                  <button className="button">Cencel</button>
                </div> */}
              </div>
            </div>
          </div>
          // </div>
        ))}

        <div className="req-choose-button">
          <div className="req-div-button">
            <button className="button add">Add Route</button>
          </div>
          {/* <div className="req-div-button">
                  <button className="button">Cencel</button>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Route;
