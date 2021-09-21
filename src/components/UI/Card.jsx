import "./Card.css";
function Card(props) {
  const card_style = "card_shadow " + props.className;
  return <div className={card_style}>{props.children}</div>;
}

export default Card;
