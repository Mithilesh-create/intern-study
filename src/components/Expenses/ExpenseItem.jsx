import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
function ExpenseItem(props) {
  // 
  const [propData, setpropData] = useState("");
  const [mapData, setmapData] = useState("");
  // 
  useEffect(() => {
    setpropData(props.data);
    setmapData(props.data);
  }, [props.data]);
  // 
  const handleFormData = (event) => {
    const yearVal=parseInt(event.target.value);
    const newMapData = propData.filter((e) => e.date.getFullYear() === yearVal )
    setmapData(newMapData);
    props.onGettingFilter(newMapData);
  };
  return (
    <>
      <select
        name="year"
        className="expense_drop_year"
        onChange={handleFormData}
      >
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
      <Card className="list_items_div">
        {mapData.length > 0 ? (
          mapData.map((e) => {
            return (
              <Card key={e.id} className="list_items">
                <ExpenseDate className="date_value" datevalue={e.date} />
                <div className="expense_title">
                  <h1>{e.title}</h1>
                </div>
                <Card className="expense_amount">
                  {"₹"}
                  {e.amount}
                </Card>
              </Card>
            );
          })
        ) : (
          <h1 className="expense_empty_message">No Records Found</h1>
        )}
      </Card>
    </>
  );
}

export default ExpenseItem;
