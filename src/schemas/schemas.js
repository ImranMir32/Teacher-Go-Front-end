import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// Regular Expression to match Bangladeshi Phone number
const phoneBd = /^(?:\+88|88)?(01[3-9]\d{8})$/;

export const teacherSignUpSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  teacherId: yup.string().required("Teacher Id is a required field"),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
  route: yup.string().required("Please select an option"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password with minimum 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const driverSignUpSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  // driverId: yup.string().required("Driver Id is a required field"),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password with minimum 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const contactUsSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
  message: yup.string().min(5).required("Message is a required field"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});

export const addRouteSchema = yup.object().shape({
  from: yup.string().min(2).required("Route name is a required field"),
  to: yup.string().min(2).required("Route name is a required field"),
  // driver_name: yup.string().required("Driver name is a required field"),
});

export const updateSignUpSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  teacherId: yup.string(),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
});
