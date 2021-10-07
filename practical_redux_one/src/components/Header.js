import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { counterloginActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginCounter.login);
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(counterloginActions.userLogout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginState && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout} >Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
