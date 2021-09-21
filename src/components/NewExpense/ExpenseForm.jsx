import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [newdate, setnewDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const id = randLetter + Date.now();
    const date = new Date(newdate);
    const data = {
      title,
      amount,
      date,
      id,
    };
    props.onFormSubmit(data);
    setTitle("");
    setAmount("");
    setnewDate("");
  };
  return (
    <>
      <form action="" className="expense_adding_form" onSubmit={handleSubmit}>
        {/*  */}
        <div className="first_item">
          <label htmlFor="expense_item">Item : </label>
          <input
            type="text"
            name="expense_item"
            autoComplete="off"
            spellCheck="false"
            id="expense_item"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/*  */}
          <label htmlFor="expense_amount">Amount : </label>
          <input
            type="number"
            name="expense_amount"
            autoComplete="off"
            spellCheck="false"
            id="expense_amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/*  */}
        <div className="second_item">
          <div>
            <label htmlFor="expense_date">Date : </label>
            <input
              type="date"
              autoComplete="off"
              name="expense_date"
              id="expense_date"
              value={newdate}
              required
              onChange={(e) => setnewDate(e.target.value)}
            />
          </div>
          <button className="expense_btn_save" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
