import MainNavigation from "../MainNavigation";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
