import classes from "./cartModal.module.css";
import Card from "../UI/Card";
import CartItems from "./CartItems";
import Button from "../UI/Button";
import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import FoodCartContext from "../store/cart-context";
import CartForm from "./CartForm";
const Backdrop = (props) => {
  return <div className={classes.backDrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  const [show, setshow] = useState(false);
  const [Order, setOrder] = useState(false);
  const ctx = useContext(FoodCartContext);
  const totalAmountFixed = ctx.totalAmount.toFixed(2);

  const handlePost = async (data) => {
    const ordData = {
      orderItems: ctx.items,
      data,
      totalAmount: totalAmountFixed,
    };
    const res = await fetch(
      "https://foodmenu-9b4cf-default-rtdb.firebaseio.com/foodorder.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ordData),
      }
    );
    if (res.ok) {
      setOrder(true);
      setshow(false);
    }
  };

  return (
    <>
      <Card className={classes.cartModal}>
        <form action="" className={classes.cart_form}>
          {!Order && (
            <div className={classes.overflowArea}>
              {ctx.items.map((e) => {
                return <CartItems key={e.id} data={e} />;
              })}
            </div>
          )}
          <div className={classes.shopping_amount}>
            <span>Total Amount</span>
            <span className={classes.shopping_total_amount}>
              $ {totalAmountFixed}
            </span>
          </div>
        </form>
        {show && (
          <CartForm
            onCloseModal={props.onRemoveModal}
            onSendData={handlePost}
          />
        )}
        {Order && (
          <p className={classes.orderPlaced}>Order Placed Successfully</p>
        )}
        {!show && (
          <div className={classes.cart_order_div}>
            <Button className={classes.close_btn} onClick={props.onRemoveModal}>
              Close
            </Button>
            {ctx.items.length !== 0 && !Order ? (
              <Button
                className={classes.order_btn}
                onClick={() => {
                  setshow(true);
                }}
              >
                Order
              </Button>
            ) : null}
          </div>
        )}
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
      {ReactDOM.createPortal(<Backdrop onClick={handelModal} />, getAccess)}
      {ReactDOM.createPortal(
        <ModalOverlay onRemoveModal={handelModal} />,
        getAccess
      )}
    </>
  );
}

export default CartModal;
