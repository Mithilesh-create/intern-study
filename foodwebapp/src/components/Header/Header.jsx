import classes from "./Header.module.css"
import CartBtn from "./CartBtn";
function Header(props) {
  const handleCart=()=>{
    props.onCheckShow(true);
  }
  return (
    <div className={classes.header}>
      <div className={classes.LogoHere}>FoodieBay</div>
      <div>
        <CartBtn onClick={handleCart}/>
      </div>
    </div>
  );
}

export default Header;
