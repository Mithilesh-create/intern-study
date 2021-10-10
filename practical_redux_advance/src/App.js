import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { getData, updateData } from "./components/store/cart-slice";
import Notification from "./components/UI/Notification";

let initial = true;
function App() {
  const dispatch = useDispatch();

  const cartVisible = useSelector((state) => state.cartDisplay);
  const cartNotification = useSelector((state) => state.cartDisplay);
  const cart = useSelector((state) => state.cartOperations);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if(cart.changed){
      dispatch(updateData({
        items:cart.items,
        total_quantity:cart.total_quantity,
      }));
    }
  }, [cart, dispatch]);
  return (
    <>
      {cartNotification.notification && (
        <Notification
          status={cartNotification.notification.status}
          message={cartNotification.notification.message}
          title={cartNotification.notification.title}
        />
      )}
      <Layout>
        {cartVisible.cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
