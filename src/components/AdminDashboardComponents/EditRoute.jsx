import React, { useEffect, useState } from "react";
import "../../styles/signin.css";
import { useFormik } from "formik";
import { addRouteSchema } from "../../schemas/schemas";
import { AiOutlineClose } from "react-icons/ai";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import "../../styles/Dashboard/components.css";

const EditRoute = ({ obj }) => {
  const [addRoutePage, setAddRoutePage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("ok");
    console.log(JSON.stringify(values));
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
      from: "",
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
            {/* <label htmlFor="from">Driver Name</label>
            <select
           
            >
              {states.map((state) => {
                return <option>{state}</option>;
              })}
            </select> */}
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
            <AiOutlineClose
              onClick={() => {
                handleReturn(false);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoute;
