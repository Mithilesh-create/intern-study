import { useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCT = [
  {
    id: 1,
    title: "BOOK",
    description: "This book product is amazing!",
    price: 5,
  },
  {
    id: 2,
    title: "PEN",
    description: "This pen product is amazing!",
    price: 8,
  },
  {
    id: 3,
    title: "GLUE",
    description: "This glue product is amazing!",
    price: 2,
  },
];
const ProductData = [];

const Products = (props) => {
  useEffect(() => {
    const gettingData = async () => {
      const res = await fetch(
        "https://redux-store-5deb9-default-rtdb.firebaseio.com/redux-store.json"
      );
      const response = await res.json();
      for (const key in response) {
        const data = {
          id: key,
          title: response[key].title,
          price: response[key].price,
          description: response[key].description,
        };
        ProductData.push(data);
      }
    };
    gettingData();
  }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((e) => {
          return (
            <ProductItem
              key={e.id}
              id={e.id}
              title={e.title}
              price={e.price}
              description={e.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
