import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./FoodList.module.css";
import FoodListItem from "./FoodListItem";
function FoodList() {
  const [Dummy_data, setDummy_data] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    const fetchDataFun = async () => {
      try {
        setisLoading(true);
        setisError(false);
        const res = await fetch(
          "https://foodmenu-9b4cf-default-rtdb.firebaseio.com/foodmenu.json"
        );
        if (res.ok) {
        setisLoading(false);
          const response = await res.json();
          const resArr = [];
          for (const key in response) {
            resArr.push({
              id: key,
              name: response[key].name,
              description: response[key].description,
              price: response[key].price,
            });
          }
          setDummy_data(resArr);
        } else {
          setisLoading(false);
          setisError(true);
        }
      } catch (error) {
        console.log(error);
        setisLoading(false);
        setisError(true);
      }
    };
    fetchDataFun();
  }, []);
  return (
    <>
      <Card className={classes.foodContainer}>
        {!isLoading &&
          Dummy_data.map((e) => {
            return <FoodListItem key={e.id} data={e} />;
          })}
        {isLoading && <p>is Loading...</p>}
        {isError && <p>Something Went Wrong...</p>}
      </Card>
    </>
  );
}

export default FoodList;
