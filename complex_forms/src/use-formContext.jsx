import { useState } from "react";

function useFormHook(validateVal) {
  const [Input, setInput] = useState("");
  const [FocusInput, setFocusInput] = useState(false);
  const valueIsValid = validateVal(Input);
  const validateValue = !valueIsValid && FocusInput;

  const handleDataInput = (e) => {
    setInput(e.target.value);
  };
  const handleInputTouch = () => {
    setFocusInput(true);
  };
  const FormDatavalidate = validateValue
    ? "form-control invalid"
    : "form-control ";

  const reset=()=>{
    setInput("");
    setFocusInput(false);
  }
  return {
    Input,
    valueIsValid,
    validateValue,
    handleDataInput,
    handleInputTouch,
    FormDatavalidate,
    reset,
  };
}

export default useFormHook;
