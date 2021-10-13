import { useRef } from "react";
import classes from "./ProfileForm.module.css";
import { useContext } from "react";
import authContext from "../../store/authContext";
import { useHistory } from "react-router";
const ProfileForm = () => {
  const passRef = useRef();
  const dataCtx = useContext(authContext);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newpassword = passRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAcnVGw9hcUDAxOdj8J5da0gQNgUQMOH94",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: dataCtx.token,
            password: newpassword,
            returnSecureToken: true,
          }),
        }
      );
      if (response.ok) {
        await response.json();
        history.replace("/");
      } else {
        const res = await response.json();
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          ref={passRef}
          autoComplete="off"
          spellCheck="false"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
