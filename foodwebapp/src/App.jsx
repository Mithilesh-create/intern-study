import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Header/Header";
import CartModal from "./components/Modal/CartModal";
import CartContextProvider from "./components/store/CartContextProvider";
function App() {
  const [show, setshow] = useState(false);
  const showOverlay=(data)=>{
    setshow(data);
  }
  return (
    <CartContextProvider>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/WBC_7095.jpg?format=2500w"
        alt="foodimage"
        className="background_image"
      />
      <div className="upperlevel_div">
        <Header onCheckShow={showOverlay} />
        <FoodList />
      </div>
      {show ? <CartModal onKillModal={showOverlay}/> : null}
    </CartContextProvider>
  );
}

export default App;
