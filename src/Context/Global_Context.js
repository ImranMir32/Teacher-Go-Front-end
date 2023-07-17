import React, { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState(false);
  return (
    <GlobalStateContext.Provider
      value={{
        user,
        userName,
        token,
        show,
        setUser,
        setUserName,
        setToken,
        setShow,
        userStatus,
        setUserStatus,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
