import React from "react";
import "../../styles/Dashboard/components.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Request = () => {
  //   const [Page, setPage] = useState("Account Request");

  //   const handleButtonClick = (param) => {
  //     setPage(param);
  //   };

  const demoRequest = [
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Md. Imran Mir",
          teacher_id: 1944651035,
          mail: "1944651035@uits.edu.bd",
        },
      ],
    },

    {
      id: 1,
      account_type: "Driver",
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 2,
      account_type: "Teacher",
      details: [
        {
          name: "Olin Akon Chumky",
          teacher_id: 1944651032,
          mail: "1944651032@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Murtoza Likhon",
          teacher_id: 1944651079,
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Md. Imran Mir",
          teacher_id: 1944651035,
          mail: "1944651035@uits.edu.bd",
        },
      ],
    },
    {
      id: 2,
      account_type: "Teacher",
      details: [
        {
          name: "Olin Akon Chumky",
          teacher_id: 1944651032,
          mail: "1944651032@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Driver",
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Murtoza Likhon",
          teacher_id: 1944651079,
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Md. Imran Mir",
          teacher_id: 1944651035,
          mail: "1944651035@uits.edu.bd",
        },
      ],
    },
    {
      id: 2,
      account_type: "Teacher",
      details: [
        {
          name: "Olin Akon Chumky",
          teacher_id: 1944651032,
          mail: "1944651032@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Driver",
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      account_type: "Teacher",
      details: [
        {
          name: "Murtoza Likhon",
          teacher_id: 1944651079,
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="request-container" id="mySection">
        {demoRequest.map((demoRequest) => (
          <div
            className={
              demoRequest.account_type === "Teacher"
                ? "request-details-teacher"
                : "request-details"
            }

            // className="request-details-teacher"
          >
            <div className="request-all-details">
              <div key={demoRequest.id}>
                <h3>{demoRequest.account_type}</h3>
                <div>
                  {demoRequest.details.map((details) => (
                    <div key={details.teacher_id}>
                      <p>Name : {details.name}</p>
                      {demoRequest.account_type === "Teacher" ? (
                        <p>Teacher Id : {details.teacher_id}</p>
                      ) : (
                        <p>Driver Id : {details.driver_id}</p>
                      )}
                      <p>Mail : {details.mail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="request-all-details">
              <div className="req-choose-button">
                <div className="req-div-button">
                  <button className="button">Approve</button>
                </div>
                <div className="req-div-button">
                  <button className="button">Cencel</button>
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

export default Request;
