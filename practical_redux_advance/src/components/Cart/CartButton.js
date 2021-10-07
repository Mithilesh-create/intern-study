import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/ui-slice";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const items = useSelector(state => state.cartOperations)
  const dispatch = useDispatch();
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(cartAction.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{items.total_quantity}</span>
    </button>
  );
};

export default CartButton;
