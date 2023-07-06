import React, { useEffect } from "react";
import "../styles/main.css";
import { useFormik } from "formik";
import { teacherSignUpSchema } from "../schemas/schemas";
// import imgSignUp from "../assets/signup.svg";
// import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherSignupForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("ok");
    console.log(JSON.stringify(values));

    let obj = {
      name: values.name,
      email: values.email,
      id: values.teacherId,
      phone: values.phone,
      routeId: values.route,
      password: values.password,
      role: values.role,
    };

    let jsonStr = JSON.stringify(obj);
    console.log(jsonStr);

    console.log("->", obj);
    let result = await fetch("http://localhost:8000/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log("result--> ", result.newUser);
    actions.resetForm();
    console.log(result);
    if (result.status === "success") {
      toast.success("Request has been send successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.warning("Email is already used try another email !", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      name: "",
      email: "",
      teacherId: "",
      phone: "",
      password: "",
      confirmPassword: "",
      route: "",
      role: "teacher",
    },
    validationSchema: teacherSignUpSchema,
    onSubmit,
  });
  const routesArray = [
    "",
    "UITS-Rampura",
    "UITS-Khilgoan",
    "UITS-Uttara",
    "UITS-Gazipur",
    "UITS-Bashaboo",
  ];
  console.log(errors);
  return (
    <>
      <main class="main">
        <div class="container">
          <div class="form-container">
            <h1>Create an account as a Teacher</h1>
            <form class="login form" onSubmit={handleSubmit} autoComplete="off">
              {/* name */}
              <label htmlFor="name">Name</label>
              <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Enter your name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
              />
              {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              )}

              {/* email */}
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}

              {/* teacherId */}
              <label htmlFor="teacherId">Teacher Id</label>
              <input
                value={values.teacherId}
                onChange={handleChange}
                id="teacherId"
                type="text"
                placeholder="Enter your Teacher Id"
                onBlur={handleBlur}
                className={
                  errors.teacherId && touched.teacherId ? "input-error" : ""
                }
              />
              {errors.teacherId && touched.teacherId && (
                <p className="error">{errors.teacherId}</p>
              )}

              {/* Mobile number */}
              <label htmlFor="phone">Mobile number</label>
              <input
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="text"
                placeholder="Enter your Mobile number"
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""}
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}

              {/* routes */}
              {/* <div>
                <label htmlFor="from">Route </label>
                <select>
                  {routesArray.map((route) => {
                    return <option>{route}</option>;
                  })}
                </select>
              </div> */}
              <div>
                <label htmlFor="from">Route </label>
                <select
                  name="route" // Add the name attribute
                  value={values.route}
                  onChange={handleChange}
                >
                  {routesArray.map((route, index) => (
                    <option key={index} value={route}>
                      {route}
                    </option>
                  ))}
                </select>
              </div>

              {/* passwword */}
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}

              {/* confirmPasswword */}
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}

              {/* button */}
              <button disabled={isSubmitting} type="submit" class="button">
                Submit
              </button>
              <ToastContainer />

              {/* login  */}
              <div class="info">
                Already have an account?{" "}
                <Link to="/" className="link">
                  Login
                </Link>{" "}
                instead.
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default TeacherSignupForm;
