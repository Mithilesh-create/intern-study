import React, { useContext } from "react";

import FavoriteItem from "../components/Favourites/FavouriteItem";
import "./Products.css";
import { ContentCtx } from "../context/use-context.jsx";
const Favorites = (props) => {
  const favoriteProducts = useContext(ContentCtx).products.filter(e=>e.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
