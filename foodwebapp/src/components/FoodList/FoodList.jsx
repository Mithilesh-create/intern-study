import Card from "../UI/Card";
import classes from "./FoodList.module.css";
import FoodListItem from "./FoodListItem";
function FoodList() {
  const Dummy_data = [
    { id: "m1", name: "Sushi", description: "Great Japanese Dish", price: "2.99" },
    { id: "m2", name: "Fried Fish", description: "Marinated And Smoked", price: "5.99" },
    { id: "m3", name: "Rice Curry", description: "Spicey Gravy with Yogurt", price: "12.99" },
    { id: "m4", name: "Palak Paneer", description: "Soft Cottage Cubes", price: "14.99" },
  ];
  return (
    <Card className={classes.foodContainer}>
      {Dummy_data.map((e) => {
        return <FoodListItem key={e.id} data={e} />;
      })}
    </Card>
  );
}

export default FoodList;
