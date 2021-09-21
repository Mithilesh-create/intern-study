import Chart from "../Charts/Chart";

function ExpenseChart(props) {
  const dataVal = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    let expense_month = 0;
    let expense_amount = 0;
    expense.forEach((element) => {
      expense_month = element.date.getMonth();
      expense_amount = parseInt(element.amount);
    });
    dataVal[expense_month].value += expense_amount;
  }
  return (
    <>
      <Chart dataPoints={dataVal} />
    </>
  );
}

export default ExpenseChart;
