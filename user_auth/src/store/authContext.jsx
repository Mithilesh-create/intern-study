import React, { useCallback, useEffect, useState } from "react";
let logoutTimer;
const authContext = React.createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});
const calculateTime = (expire) => {
  const current = new Date().getTime();
  const expiresAt = new Date(expire).getTime();
  const remaining = current - expiresAt;
  return remaining;
};
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
  const useContextValue = {
    token: token,
    isLogin: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <>
      <authContext.Provider value={useContextValue}>
        {props.children}
      </authContext.Provider>
    </>
  );
};

export default authContext;
