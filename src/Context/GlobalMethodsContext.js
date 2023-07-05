import { GlobalStateContext } from "./Global_Context";
import React, { createContext, useContext } from "react";
import axios from "axios";

const GlobalMethodsContext = createContext();

const GlobalMethodsProvider = ({ children }) => {
  const { user, setUserName, setToken, setUser } =
    useContext(GlobalStateContext);

  const SignIn = async (values) => {
    try {
      const url = "http://localhost:4000/api/users/login";
      const response = await axios({
        method: "POST",
        url,
        data: values,
      });
      //   console.log("name: ", response.data.access_token);
      setUserName(response.data.user.name);
      setToken(response.data.access_token);
      setUser(response.data.user);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 401;
    }
  };

  const SignUp = async (values) => {
    try {
      const url = "http://localhost:4000/api/users/signin";
      const response = await axios({
        method: "POST",
        url,
        data: values,
      });

      return response.status;
    } catch (error) {
      console.log(error.message);
      return 500;
    }
  };

  const imgUpload = async (values) => {
    try {
      await axios.post("http://localhost:4000/api/image/upload", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.log(error.message);
      return 401;
    }
  };

  const updateUser = async (values) => {
    try {
      const url = `http://localhost:4000/api/users/update/${user.email}`;
      const response = await axios({
        method: "PUT",
        url,
        data: values,
      });

      console.log(response.data);
      setUser(response.data);
      setUserName(response.data.name);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 500;
    }
  };

  const resetPassword = async (values) => {
    try {
      const url = `http://localhost:4000/api/users/reset-password/${user.email}`;
      const response = await axios({
        method: "PUT",
        url,
        data: values,
      });

      console.log(response.data);
      setUser(response.data);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 500;
    }
  };

  const updateScore = async (values) => {
    try {
      const url = `http://localhost:4000/api/users/update-score/${user.email}`;
      const response = await axios({
        method: "PUT",
        url,
        data: values,
      });

      console.log(response.data);
      setUser(response.data);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 500;
    }
  };

  const clearAllData = () => {
    setUserName("");
    setToken("");
    setUser("");
  };
  return (
    <GlobalMethodsContext.Provider
      value={{
        clearAllData,
        SignIn,
        SignUp,
        imgUpload,
        updateUser,
        resetPassword,
        updateScore,
      }}
    >
      {children}
    </GlobalMethodsContext.Provider>
  );
};
export { GlobalMethodsContext, GlobalMethodsProvider };
