import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [Data, setData] = useState({
    title: "",
    amount: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddForm(Data)
    // ...
  };
  let value, name;
  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...Data, [name]: value });
  };
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              value={Data.title}
              name="title"
              onChange={onChangeHandler}
              type="text"
              id="title"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              value={Data.amount}
              onChange={onChangeHandler}
              name="amount"
              type="number"
              id="amount"
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.isLoading && <LoadingIndicator/>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
