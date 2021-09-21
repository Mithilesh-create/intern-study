import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useState } from "react";
function AddUser(props) {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({
    name: "",
    age: "",
  });
  const [err, seterr] = useState({
    title: "",
    message: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.trim().length === 0 || data.age.trim().length === 0) {
      setshow(true);
      seterr({
        title: "Invalid Fields",
        message: "Please enter a name and age fields properly",
      });
    } else if (data.age <= 0 || data.age > 120) {
      setshow(true);
      seterr({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
    } else {
      props.onGetData(data);
      setdata({
        name: "",
        age: "",
      });
    }
  };
  const closeHandler = () => {
    setshow(false);
  };
  return (
    <>
      {show ? <ErrorModal data={err} onClick={closeHandler} /> : null}
      <Card className="outer_form_area">
        <form action="" className="formArea" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              name="name"
              spellCheck="false"
              autoComplete="off"
              value={data.name}
              onChange={handleInput}
            />
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              value={data.age}
              name="age"
              onChange={handleInput}
              autoComplete="off"
            />
          </div>
          <Button className="addUserBtn" type="submit">
            Add
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
