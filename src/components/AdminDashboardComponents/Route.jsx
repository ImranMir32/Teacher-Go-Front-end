import React, { useEffect, useState } from "react";
import "../../styles/signin.css";
import { useFormik } from "formik";
import { addRouteSchema } from "../../schemas/schemas";
import { AiOutlineClose } from "react-icons/ai";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import "../../styles/Dashboard/components.css";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("ok");
  console.log(JSON.stringify(values));

  //   let result = await fetch("http://localhost:4000/api/users/signin", {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   // console.log("result--> ", result.newUser);
  //   actions.resetForm();

  //   if (result.newUser) {
  //     toast.success("Account has been created !", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     setTimeout(() => {
  //       window.location.href = "/signin";
  //     }, 2000);
  //   } else {
  //     toast.warning("Email is already used try another email !", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
};

const Route = () => {
  const [addRoutePage, setAddRoutePage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      to: "",
      from: "",
      // driver_name: "",
    },
    validationSchema: addRouteSchema,
    onSubmit,
  });

  console.log(errors);

  const handleButtonClick = (param) => {
    setAddRoutePage(param);
  };

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

  const states = ["UP", "Delhi", "Gujrat"];
  const cities = {
    UP: ["f", "g", "l"],
    Delhi: ["a", "b"],
    Gujrat: ["tr", "trt", "rtt"],
  };

  const [selectedState, setSelectedState] = useState("");

  return (
    <div>
      {!addRoutePage ? (
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
            <div
              className="req-div-button"
              onClick={() => {
                handleButtonClick(true);
              }}
            >
              <button className="button add">Add Route</button>
            </div>
          </div>
        </div>
      ) : (
        <div class="route-form-container">
          {/* <h1>Add Route in the list</h1> */}
          <form class="login form" onSubmit={handleSubmit} autoComplete="off">
            {/* From */}
            <label htmlFor="from">From</label>
            <input
              value={values.from}
              onChange={handleChange}
              id="from"
              type="text"
              placeholder="Enter route name from.."
              onBlur={handleBlur}
              className={errors.from && touched.from ? "input-error" : ""}
            />
            {errors.from && touched.from && (
              <p className="error">{errors.from}</p>
            )}
            {/* name */}
            <label htmlFor="name">To</label>
            <input
              value={values.to}
              onChange={handleChange}
              id="to"
              type="text"
              placeholder="Enter route name to.."
              onBlur={handleBlur}
              className={errors.to && touched.to ? "input-error" : ""}
            />
            {errors.to && touched.to && <p className="error">{errors.to}</p>}

            {/* <h1>Driver name :</h1>
            <h2>list</h2> */}

            <div>
              <label htmlFor="from">Driver Name</label>
              <select
                onChange={(e) => {
                  setSelectedState(e.target.value);
                }}
              >
                {states.map((state) => {
                  return <option>{state}</option>;
                })}
              </select>
              {selectedState && (
                <select>
                  {cities[selectedState].map((city) => {
                    return <option>{city}</option>;
                  })}
                </select>
              )}
            </div>
            {/* button */}
            <button disabled={isSubmitting} type="submit" class="button">
              Add Route
            </button>
            {/* <ToastContainer /> */}
            <div
              className="route-close"
              // onClick={() => {
              //   handleChooseClick(false);
              // }}
            >
              <AiOutlineClose />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Route;
