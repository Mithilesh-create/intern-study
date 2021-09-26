import classes from "./cartModal.module.css";
import Card from "../UI/Card";
import CartItems from "./CartItems";
import Button from "../UI/Button";
import ReactDOM from "react-dom";
import { useContext } from "react";
import FoodCartContext from "../store/cart-context";
const Backdrop = (props) => {
  return <div className={classes.backDrop}></div>;
};
const ModalOverlay = (props) => {
  const ctx = useContext(FoodCartContext);
  const totalAmountFixed=ctx.totalAmount.toFixed(2);
  return (
    <>
      <Card className={classes.cartModal}>
        <form action="" className={classes.cart_form}>
          {ctx.items.map((e) => {
            return <CartItems key={e.id} data={e} />;
          })}
          <div className={classes.shopping_amount}>
            <span>Total Amount</span>
            <span className={classes.shopping_total_amount}>
              $ {totalAmountFixed}
            </span>
          </div>
        </form>
        <div className={classes.cart_order_div}>
          <Button className={classes.close_btn} onClick={props.onRemoveModal}>
            Close
          </Button>
          {ctx.items.length !== 0 ? (
            <Button className={classes.order_btn} onClick={()=>{console.log("Ordering....");}}>Order</Button>
          ) : null}
        </div>
      </Card>
    </>
  );
};
const getAccess = document.getElementById("overlay");
function CartModal(props) {
  const handelModal = () => {
    props.onKillModal(false);
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, getAccess)}
      {ReactDOM.createPortal(
        <ModalOverlay onRemoveModal={handelModal} />,
        getAccess
      )}
    </>
  );
}

export default CartModal;
