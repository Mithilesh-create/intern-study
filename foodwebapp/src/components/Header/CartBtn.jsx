import { useContext } from "react";
import FoodCartContext from "../store/cart-context";
import Button from "../UI/Button";
import classes from "./CartBtn.module.css";
function CartBtn(props) {
  const ctx = useContext(FoodCartContext);
  const cartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Button className={classes.cartBtn} onClick={props.onClick}>
      <span>
        <i className="fas fa-shopping-cart" />
      </span>
      <span>My Cart</span>
      <span className={classes.badge_items}>{cartItems}</span>
    </Button>
  );
}

export default CartBtn;
