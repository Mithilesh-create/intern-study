import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Products = (props) => {
  const [Data, setData] = useState([])
  useEffect(() => {
    const gettingData = async () => {
      const res = await fetch(
        "https://redux-store-5deb9-default-rtdb.firebaseio.com/redux-store.json"
      );
      const response = await res.json();
      const ProductData = [];
      for (const key in response) {
        ProductData.push({
          id: key,
          title: response[key].title,
          price: response[key].price,
          description: response[key].description,
        });
      }
      setData(ProductData);
    };
    gettingData();
  }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Data.map((e) => {
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
