import classes from "./CartItems.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import FoodCartContext from "../store/cart-context";
import { useContext } from "react";

function CartItems(props) {
  const ctx = useContext(FoodCartContext);
  const addItemCart = (e) => {
    e.preventDefault();
    ctx.addItems({
      id: props.data.id,
      name: props.data.name,
      price: props.data.price,
      amount: props.data.amount,
    });
  };
  const removeItemCart = (e) => {
    e.preventDefault();
    ctx.removeItems(props.data.id);
  };
  return (
    <>
      <Card className={classes.shopping_list}>
        <div className={classes.shopping_divone}>
          <span className={classes.shopping_item_name}>{props.data.name}</span>
          <div className={classes.shopping_item_info}>
            <span>$ {props.data.price}</span>
            <p className={classes.shopping_item_amount}>
              + {props.data.amount}
            </p>
          </div>
        </div>
        <div className={classes.shopping_divtwo}>
          <Button className={classes.add} onClick={addItemCart}>
            +
          </Button>
          <Button className={classes.sub} onClick={removeItemCart}>
            -
          </Button>
        </div>
      </Card>
    </>
  );
}

export default CartItems;
