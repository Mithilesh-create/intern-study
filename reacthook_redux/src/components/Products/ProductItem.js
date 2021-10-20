import React, { useContext } from "react";
import { ContentCtx } from "../../context/use-context";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const ctxData = useContext(ContentCtx).toggleChange;
  const setFavourite=()=>{
    ctxData(props.id)
  }
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={setFavourite}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
