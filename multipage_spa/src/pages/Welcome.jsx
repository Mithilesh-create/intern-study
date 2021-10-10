import { Route } from "react-router";

function Welcome() {
  return (
    <>
      <h1>Welcome Page!</h1>
      <Route path="/welcome/greet">
        <h1>Hello World!</h1>
      </Route>
    </>
  );
}

export default Welcome;
