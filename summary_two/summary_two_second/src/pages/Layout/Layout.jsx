import MainNavigation from "../MainNavigation";

function Layout(props) {
  return (
    <div className="mainArea">
      <MainNavigation />
      <br />
      <div className="centered">{props.children}</div>
    </div>
  );
}

export default Layout;
