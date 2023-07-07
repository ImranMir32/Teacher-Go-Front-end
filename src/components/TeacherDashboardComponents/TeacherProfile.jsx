import React, { useState, useEffect } from "react";
import "../../styles/Dashboard/profile.css";
import "../../styles/Dashboard/updateForm.css";
import sir from "../../assets/imtiaz_sir.jpg";
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

const TeacherProfile = () => {
  const [imageURL, setImageURL] = useState(sir);
  const [update, setUpdate] = useState(false);

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
      name: "Mr. Al-Imtiaz​",
      email: "alimtiazsir@gmail.com",
      teacherId: "19446510001",
      phone: "01911111111",
      password: "",
    },
    validationSchema: teacherSignUpSchema,
    onSubmit,
  });

  console.log(errors);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageURL(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      {!update ? (
        <div className="card-container">
          <div className="profile-image-container">
            <img className="profile-image" src={imageURL} alt="Profile" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="image-upload"
            />
          </div>

          <div className="info-container">
            <div className="driver-status">
              <p>Name : Mr. Al-Imtiaz​</p>
              <p className="status-a">ACTIVE</p>
            </div>

            <p>Phone Number : 01911111111</p>
            <p>Teacher Id : 19446510001</p>
            <p>Route : Campus-Rampura</p>
            <p>Email : alimtiazsir@gmail.com</p>
          </div>

          <div
            className="profile-edit-button"
            onClick={() => {
              setUpdate(true);
            }}
          >
            <button className="button add">Update</button>
          </div>
        </div>
      ) : (
        <div>
          <main class="update-main">
            <div class="update-container">
              <div class="update-form-container">
                <h1>Update Info :</h1>
                <form
                  class="login form"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
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
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
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
                    className={
                      errors.phone && touched.phone ? "input-error" : ""
                    }
                  />
                  {errors.phone && touched.phone && (
                    <p className="error">{errors.phone}</p>
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
                    Update Info
                  </button>
                  {/* <ToastContainer /> */}
                  <div
                    className="update-close"
                    onClick={() => {
                      window.location.href = "/teacher-dashboard";
                      setUpdate(false);
                    }}
                  >
                    <AiOutlineClose />
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;
