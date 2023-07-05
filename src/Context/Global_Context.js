import React, { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  return (
    <GlobalStateContext.Provider
      value={{
        user,
        userName,
        token,
        setUser,
        setUserName,
        setToken,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
