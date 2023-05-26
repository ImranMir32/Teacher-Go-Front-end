import React, { useEffect } from "react";

import "../../styles/Dashboard/updateForm.css";

import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
// import { Link } from "react-router-dom";
import { teacherSignUpSchema } from "../../schemas/schemas";

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

const ResetPassword = () => {
  //   const [update, setUpdate] = useState(false);

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
      current_password: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: teacherSignUpSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div>
      <div>
        <main class="update-main">
          <div class="update-container">
            <div class="update-form-container">
              <h1>Reset Password :</h1>
              <form
                class="login form"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                {/* passwword */}
                <label htmlFor="current_password">Current Password</label>
                <input
                  id="current_password"
                  type="current_password"
                  placeholder="Enter your Current password"
                  value={values.current_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.current_password && touched.current_password
                      ? "input-error"
                      : ""
                  }
                />
                {errors.current_password && touched.current_password && (
                  <p className="error">{errors.current_password}</p>
                )}

                {/* passwword */}
                <label htmlFor="password">New Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your New password"
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
                  Reset Password
                </button>
                {/* <ToastContainer /> */}
                <div
                  className="update-close"
                  onClick={() => {
                    window.location.href = "/teacher-dashboard";
                    // setUpdate(false);
                  }}
                >
                  <AiOutlineClose />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResetPassword;
