import React, { useEffect, useState } from "react";
import "../styles/signin.css";
import { useFormik } from "formik";
import { signInSchema } from "../schemas/schemas";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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

const SignInForm = () => {
  const [choose, setChoose] = useState(false);
  const handleChooseClick = (param) => {
    setChoose(param);
  };

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
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
      {!choose ? (
        <main class="sign-main">
          <div class="sign-container">
            <div class="sign-form-container">
              <h1>Login into Teacher-Go</h1>
              <form
                class="sign-login sign-form"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
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

                {/* button */}
                <button disabled={isSubmitting} type="submit" class="button">
                  Submit
                </button>
                {/* <ToastContainer /> */}

                {/* login  */}
                <div
                  className="sign-info"
                  onClick={() => {
                    handleChooseClick(true);
                  }}
                >
                  Don't have an account? <Link className="link">Signup</Link>{" "}
                  instead.
                </div>
              </form>
            </div>
          </div>
        </main>
      ) : (
        <main class="sign-main">
          <div class="sign-container">
            <div class="sign-form-container">
              <h1 className="H">Teacher-Go</h1>
              <p className="P">What kind of account You want to create ?</p>
              <div className="choose-button">
                <div className="div-button">
                  <button className="button">
                    <Link to="/teacher-signup" className="link--">
                      Teacher
                    </Link>
                  </button>
                </div>
                <div className="div-button">
                  <button className="button">
                    <Link to="/driver-signup" className="link--">
                      Driver
                    </Link>
                  </button>
                </div>
              </div>
              <div
                className="close"
                onClick={() => {
                  handleChooseClick(false);
                }}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default SignInForm;
