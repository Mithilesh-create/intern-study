import { useState } from "react";
import classes from "./components/Modal/CartForm.module.css";
function useFormHook(valid) {
  const [data, setdata] = useState("");
  const [Touched, setTouched] = useState(false);
  const IsdataValid = valid(data);
  const dataValidateError = !IsdataValid && Touched;

  const handleData = (e) => {
    setdata(e.target.value);
  };
  const handleTouchedData = () => {
    setTouched(true);
  };
  const reset = () => {
    setdata("");
    setTouched(false);
  };
  const changeClass = dataValidateError ? classes.error : null;
  return {
    data,
    IsdataValid,
    dataValidateError,
    handleData,
    handleTouchedData,
    changeClass,
    reset
  };
}

export default useFormHook;
