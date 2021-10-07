import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const loginState = useSelector((state) => state.loginCounter.login);
  return (
    <>
      <Header />
      {!loginState && <Auth />}
      {loginState && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
