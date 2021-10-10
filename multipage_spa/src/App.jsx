import { Redirect, Route, Switch } from "react-router";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductItems from "./pages/ProductItems";
import MainHeader from "./MainHeader";
function App() {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route exact path="/product/:para">
          <ProductItems />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
    </>
  );
}

export default App;
