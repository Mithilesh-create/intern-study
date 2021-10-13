import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../store/authContext";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dataCtx = useContext(authContext);
  const handleLogout = () => {
    dataCtx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!dataCtx.isLogin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {dataCtx.isLogin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {dataCtx.isLogin && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
