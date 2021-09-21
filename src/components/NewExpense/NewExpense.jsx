// import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const handleFormSubmission=(data)=>{
    props.onGettingFormData(data);
  }
  return (
    <Card className="form_container">
      <ExpenseForm onFormSubmit={handleFormSubmission} />
    </Card>
  );
}

export default NewExpense;
