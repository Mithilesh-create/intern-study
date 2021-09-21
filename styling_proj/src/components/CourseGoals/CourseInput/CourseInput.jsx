import React, { useState } from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
const CourseInput = (props) => {
  const FormDiv = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${props=>props.isInvalid ? "red":"black"};
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${props=>props.isInvalid ? "red":"#ccc"};
      font: inherit;
      background: ${props=>props.isInvalid ? "salmon":"transparent"};
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }
    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  `;
  const [enteredValue, setEnteredValue] = useState("");
  const [Invalid, setInvalid] = useState(false);

  const goalInputChangeHandler = (event) => {
    setInvalid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setInvalid(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormDiv isInvalid={Invalid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </FormDiv>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
