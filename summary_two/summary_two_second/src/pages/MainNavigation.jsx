import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { favContext } from "./context/fav-context";
import "./MainNavigation.css";
function MainNavigation() {
  const ctxVal = useContext(favContext);
  return (
    <div className="navbar">
      <div className="headContainer">
        <h1>Meetup Area</h1>
      </div>
      <div className="linkContainer">
        <div>
          <NavLink to="/" className="Links">All Meetups</NavLink>
        </div>
        <div>
          <NavLink className="Links" to="/new-meetup">New Meetup</NavLink>
        </div>
        <div>
          <NavLink className="Links" to="/favorites">Favorite {ctxVal.favItems.length}</NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
