import { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
function Expense() {
  const [FormData, setFormData] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const handleFormData = (data) => {
    setFormData([...FormData, data]);
  };
  const FilteredExpense=(data)=>{
    setFilterData([...FilterData, data]);
  }
  return (
    <>
      <div className="expense">
        <NewExpense onGettingFormData={handleFormData} />
        <ExpenseChart expenses={FilterData} />
        <ExpenseItem data={FormData} onGettingFilter={FilteredExpense} />
      </div>
    </>
  );
}

export default Expense;
