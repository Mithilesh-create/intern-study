import { useReducer } from "react";

function useBasicFormHook(validateVal) {
  
  const InitialState = {
    Input:' ',
    FocusInput: false,
  };
  const reduceInput = (state, action) => {
    if (action.type === "Input") {
      return {
        Input: action.value,
        FocusInput: state.FocusInput,
      };
    }
    if (action.type === "Blur") {
      return {
        Input: state.value,
        FocusInput: true,
      };
    }
    if (action.type === "Reset") {
      return {
        Input: "",
        FocusInput: false,
      };
    }
    return reduceInput;
  };
  const [Inputstate, dispatch] = useReducer(reduceInput, InitialState);
  const valueIsValid = validateVal(Inputstate.Input);
  const validateValue = !valueIsValid && Inputstate.FocusInput;

  const handleDataInput = (e) => {
    dispatch({ type: "Input", value: e.target.value });
  };
  const handleInputTouch = () => {
    dispatch({ type: "Blur" });
  };
  
  const reset = () => {
    dispatch({ type: "Reset" });
  };
  const FormDatavalidate = validateValue
    ? "form-control invalid"
    : "form-control ";
  return {
    Input:Inputstate.Input,
    valueIsValid,
    validateValue,
    handleDataInput,
    handleInputTouch,
    FormDatavalidate,
    reset,
  };
}

export default useBasicFormHook;
