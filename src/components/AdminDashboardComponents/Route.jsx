import React, { useEffect, useState } from "react";
import "../../styles/signin.css";
import { useFormik } from "formik";
import { addRouteSchema } from "../../schemas/schemas";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Dashboard/components.css";
// import { useNavigate } from "react-router-dom";

const Route = () => {
  const [addRoutePage, setAddRoutePage] = useState(false);
  const [driverId, setDriverId] = useState("");

  const [reload, setReload] = useState(false);

  const [routeId, setRouteId] = useState("");

  // const navigate = useNavigate();
  const [driverList, setDriverList] = useState([]);
  const [routeList, setRouteList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        const updatedDriverList = res.data.drivers;
        updatedDriverList.unshift(""); // Add an empty string at the beginning
        setDriverList(updatedDriverList);
      })
      .catch((err) => console.log(err, "it has an error"));

    axios
      .get(`http://localhost:8000/api/v1/routes`)
      .then((res) => {
        console.log(res.data.routes);
        setRouteList(res.data.routes);
      })
      .catch((err) => console.log(err, "-->it has an error"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/drivers`)
      .then((res) => {
        const updatedDriverList = res.data.drivers;
        updatedDriverList.unshift(""); // Add an empty string at the beginning
        setDriverList(updatedDriverList);
      })
      .catch((err) => console.log(err, "it has an error"));

    axios
      .get(`http://localhost:8000/api/v1/routes`)
      .then((res) => {
        console.log(res.data.routes);
        setRouteList(res.data.routes);
      })
      .catch((err) => console.log(err, "-->it has an error"));
  }, [reload]);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("ok");
    console.log(JSON.stringify(values));
    const value = {
      name: "UITS",
      endTo: values.to,
      driver: driverId,
      driverName: values.name,
    };
    if (routeId === "") {
      let result = await fetch("http://localhost:8000/api/v1/routes", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      // // console.log("result--> ", result.newUser);
      actions.resetForm();

      if (result.status === "success1") {
        toast.success("Route has been created !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setReload(true);
        setTimeout(() => {
          handleReturn(false);
        }, 2000);
      } else {
        toast.warning("Enter valid Info !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      let result = await fetch(
        `http://localhost:8000/api/v1/routes/${routeId}`,
        {
          method: "PATCH",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      actions.resetForm();

      if (result.status === "success2") {
        toast.success("Route has been updated !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setReload(true);
        setTimeout(() => {
          handleReturn(false);
        }, 2000);
      } else {
        toast.warning("Enter valid Info !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
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
      from: "UITS",
      driver_name: "",
    },
    validationSchema: addRouteSchema,
    onSubmit,
  });

  console.log(errors);

  const handleButtonClick = (param) => {
    setAddRoutePage(param);
  };

  const handleReturn = (param) => {
    setAddRoutePage(param);
  };

  return (
    <div>
      {!addRoutePage ? (
        <div className="request-container" id="mySection">
          {routeList.map((List, index) => (
            <div className="request-details">
              <h1>{index + 1}</h1>
              <div className="request-all-details">
                <div key={List._id}>
                  <h3>Route</h3>
                  <p>
                    {console.log("-->", List.endTo)}
                    {List.endTo} - {List.name}
                  </p>
                  <p>
                    {List.name} - {List.endTo}
                  </p>
                  <p>Driver : {List.driverName}</p>
                </div>
                {/* ))} */}
                {/* </div> */}
              </div>
              <div className="request-all-details">
                <div className="req-choose-button">
                  <div className="req-div-button">
                    <button
                      className="button"
                      onClick={() => {
                        setRouteId(List._id);
                        handleButtonClick(true);
                        // handleEdit(List._id);
                      }}
                    >
                      Edit
                    </button>
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
                setRouteId("");
                handleButtonClick(true);
              }}
            >
              <button className="button add-d">Add Route</button>
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
              readOnly
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
                  setDriverId(e.target.value);
                }}
              >
                {driverList.map((state) => {
                  return (
                    <option key={state._id} value={state._id}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* button */}
            <button disabled={isSubmitting} type="submit" class="button">
              Add Route
            </button>
            <ToastContainer />
            <div
              className="route-close"
              // onClick={() => {
              //   handleChooseClick(false);
              // }}
            >
              <AiOutlineClose
                onClick={() => {
                  handleReturn(false);
                }}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Route;
