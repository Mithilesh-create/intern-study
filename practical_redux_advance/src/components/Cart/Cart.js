import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const basketItem = useSelector((state) => state.cartOperations);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {basketItem.items.map((e) => {
          return (
            <CartItem
              key={e.id}
              item={{
                id: e.id,
                price: e.price,
                title: e.item_name,
                quantity: e.quantity,
                total: e.total_price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
