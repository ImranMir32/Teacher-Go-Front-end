import React from "react";
import "../../styles/Dashboard/components.css";
import imran from "../../assets/imran.jpg";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const DriverList = () => {
  //   const [Page, setPage] = useState("Account Request");

  //   const handleButtonClick = (param) => {
  //     setPage(param);
  //   };

  const demoDriverList = [
    {
      id: 1,
      details: [
        {
          name: "Md. Imran Mir",
          driver_id: 1944651035,
          phone_no: "01911111111",
          route: "Campus-Rampura",
          mail: "imran@gmail.com",
        },
      ],
    },
    {
      id: 2,
      details: [
        {
          name: "Rafi Hasan",
          driver_id: 1944651011,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "rafi@gmail.com",
        },
      ],
    },
    {
      id: 3,
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 4,
      details: [
        {
          name: "Murtoza Likhon",
          driver_id: 1944651079,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      details: [
        {
          name: "Md. Imran Mir",
          driver_id: 1944651035,
          phone_no: "01911111111",
          route: "Campus-Rampura",
          mail: "imran@gmail.com",
        },
      ],
    },
    {
      id: 2,
      details: [
        {
          name: "Rafi Hasan",
          driver_id: 1944651011,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "rafi@gmail.com",
        },
      ],
    },
    {
      id: 3,
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 4,
      details: [
        {
          name: "Murtoza Likhon",
          driver_id: 1944651079,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
    {
      id: 1,
      details: [
        {
          name: "Md. Imran Mir",
          driver_id: 1944651035,
          phone_no: "01911111111",
          route: "Campus-Rampura",
          mail: "imran@gmail.com",
        },
      ],
    },
    {
      id: 2,
      details: [
        {
          name: "Rafi Hasan",
          driver_id: 1944651011,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "rafi@gmail.com",
        },
      ],
    },
    {
      id: 3,
      details: [
        {
          name: "Tanvir Hasan",
          driver_id: 1944651069,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651069@uits.edu.bd",
        },
      ],
    },
    {
      id: 4,
      details: [
        {
          name: "Murtoza Likhon",
          driver_id: 1944651079,
          phone_no: "01911111111",
          route: "Campus-Mohakhali",
          mail: "1944651079@uits.edu.bd",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="request-container" id="mySection">
        {demoDriverList.map((demoDriverList) => (
          <div className="list-details">
            <div className="request-all-details">
              <img src={imran} alt="imran" />
            </div>
            <div className="request-all-details">
              <div key={demoDriverList.id}>
                {/* <h3>{demoRequest.account_type}</h3> */}
                {demoDriverList.details.map((details) => (
                  <div key={details.driver_id}>
                    <div className="driver-status">
                      <p>Name : {details.name}</p>​
                      <p className="status">ACTIVE</p>
                    </div>

                    <p>Phone Number : {details.phone_no}</p>
                    <p>Driver Id : {details.driver_id}</p>
                    <p>Route : {details.route}</p>
                    <p>Mail : {details.mail}</p>
                  </div>
                ))}
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
