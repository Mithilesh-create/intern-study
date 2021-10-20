import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
function MainNavigation() {
  return (
    <div>
      <div className="headContainer">
        <h1>Meetup Area</h1>
      </div>
      <div className="linkContainer">
        <div>
          <NavLink to="/">All Meetups</NavLink>
        </div>
        <div>
          <NavLink to="/new-meetup">New Meetup</NavLink>
        </div>
        <div>
          <NavLink to="/favorites">Favorite</NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
