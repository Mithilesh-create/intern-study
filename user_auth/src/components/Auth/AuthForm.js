import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import authContext from "../../store/authContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const dataContext = useContext(authContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const emailRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true,
        }),
      });
      if (response.ok) {
        const res = await response.json();
        const expirationTime = new Date(
          new Date().getTime() + (+res.expiresIn * 1000)
        );
        dataContext.login(res.idToken,expirationTime.toISOString());
        history.replace("/");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        const res = await response.json();
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            ref={emailRef}
            spellCheck="false"
            autoComplete="off"
            id="email"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passRef}
            type="password"
            id="password"
            required
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button onClick={handleSubmit}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending Request.....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
