import { NavLink } from "react-router-dom";

function MainHeader() {
  return (
    <header>
      <NavLink activeClassName="active-class" to="/welcome">Welcome</NavLink> <br />
      <NavLink activeClassName="active-class" to="/product">Product</NavLink>
    </header>
  );
}

export default MainHeader;
