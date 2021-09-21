import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.datevalue.toLocaleString("en-US",{month: "long"});
  const day = props.datevalue.toLocaleString("en-US",{day: "2-digit"});
  const year = props.datevalue.getFullYear();

  return (
    <div className="date_div">
      <div className="expense_month">{month}</div>
      <div className="expense_year">{year}</div>
      <div className="expense_day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
