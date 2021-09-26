import classes from "./FoodListItem.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useContext, useRef } from "react";
import FoodCartContext from "../store/cart-context";

function FoodListItem(props) {
  const ctx = useContext(FoodCartContext);
  const Amountref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemAmount = parseInt(Amountref.current.value);
    if (itemAmount === 0 || itemAmount < 1 || itemAmount > 5) {
      return;
    }
    ctx.addItems({
      id: props.data.id,
      name: props.data.name,
      price: props.data.price,
      amount: itemAmount,
    });
  };
  return (
    <Card className={classes.listArea}>
      <div className={classes.firstDiv}>
        <span className={classes.foodHead}>{props.data.name}</span>
        <span className={classes.foodDescription}>
          {props.data.description}
        </span>
        <span className={classes.foodPrice}>$ {props.data.price}</span>
      </div>
      <form className={classes.secondDiv} onSubmit={handleSubmit}>
        <div className={classes.secondDiv_inner}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="1"
            max="5"
            step="1"
            ref={Amountref}
            defaultValue="1"
            id="amount"
          />
        </div>
        <Button className={classes.secondDiv_btn} type="submit">
          + Add
        </Button>
      </form>
    </Card>
  );
}

export default FoodListItem;
