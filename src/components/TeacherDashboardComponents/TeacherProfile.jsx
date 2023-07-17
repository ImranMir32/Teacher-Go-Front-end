import React, { useState, useEffect, useContext } from "react";
import "../../styles/Dashboard/profile.css";
import "../../styles/Dashboard/updateForm.css";
import demo from "../../assets/demo.webp";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
// import { Link } from "react-router-dom";
import { updateSignUpSchema } from "../../schemas/schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStateContext } from "../../Context/Global_Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TeacherProfile = () => {
  const { user, setUser } = useContext(GlobalStateContext);
  const [imageURL, setImageURL] = useState(demo);
  const [update, setUpdate] = useState(false);
  // const [notify, setNotify] = useState(false);
  // const [reload, setReload] = useState(userStatus);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
    if (user.isDriverOk === false) {
      setTimeout(() => {
        toast.error("Your Driver is ABSENT!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }, 2000);
    }
  }, [user.isDriverOk]);
  console.log(user.isDriverOk);
  // if (user.isDriverOk === false) setNotify(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/get-user/${user._id}`)
      .then((res) => {
        console.log(res.data.user);
        setUser(res.data.user);
      })
      .catch((err) => console.log(err, "it has an error"));
  }, [setUser, user._id]);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("ok");
    console.log(JSON.stringify(values));

    let result = await fetch(
      `http://localhost:8000/api/v1/users/update-user-info/${user._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log("result--> ", result.status);
    actions.resetForm();

    if (result.status === "success") {
      toast.success("Profile has been updated !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUser(result.user);
      // setReload(true);
      setTimeout(() => {
        navigate("/teacher-dashboard");
        setUpdate(false);
      }, 1000);
    } else {
      toast.warning("Enter valid Info !", {
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
      name: user?.name || "",
      email: user?.email || "",
      teacherId: user?.id || "",
      phone: user?.phone || "",
      password: "",
    },
    validationSchema: updateSignUpSchema,
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
              <p>Name: {user?.name}</p>
              {user?.isTeacherWillGo === true ? (
                <p className="status-a">ACTIVE</p>
              ) : (
                <p className="status-p">ABSENT</p>
              )}
            </div>

            <p>Phone Number : {user?.phone}</p>
            <p>Teacher Id : {user?.id}</p>
            <p>Route : {user?.routeId}</p>
            <p>Email : {user?.email}</p>
          </div>

          <div
            className="profile-edit-button"
            onClick={() => {
              setUpdate(true);
            }}
          >
            <button className="button add">Update</button>
          </div>
          <ToastContainer />
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
                    readOnly
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
                    readOnly
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
                  <ToastContainer />
                  <div
                    className="update-close"
                    onClick={() => {
                      // window.location.href = "/teacher-dashboard";
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
