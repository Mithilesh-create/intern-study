import classes from "./CartForm.module.css";
import Button from "../UI/Button";
import useFormHook from "../../useFormHook";
function CartForm(props) {
  const {
    data: nameData,
    IsdataValid: nameDataIsValid,
    dataValidateError: nameDataValidateError,
    handleData: nameHandleData,
    handleTouchedData: nameHandleTouchedData,
    changeClass: nameChangeClass,
    reset: namereset,
  } = useFormHook((val) => val.trim() !== "");
  const {
    data: emailData,
    IsdataValid: emailDataIsValid,
    dataValidateError: emailDataValidateError,
    handleData: emailHandleData,
    handleTouchedData: emailHandleTouchedData,
    changeClass: emailChangeClass,
    reset: emailreset,
  } = useFormHook((val) => val.includes("@"));
  const {
    data: streetData,
    IsdataValid: streetDataIsValid,
    dataValidateError: streetDataValidateError,
    handleData: streetHandleData,
    handleTouchedData: streetHandleTouchedData,
    changeClass: streetChangeClass,
    reset: streetreset,
  } = useFormHook((val) => val.trim() !== "");
  const {
    data: pincodeData,
    IsdataValid: pincodeDataIsValid,
    dataValidateError: pincodeDataValidateError,
    handleData: pincodeHandleData,
    handleTouchedData: pincodeHandleTouchedData,
    changeClass: pincodeChangeClass,
    reset: pincodereset,
  } = useFormHook((val) => val.trim().length === 6);

  const handleSubmit = (e) => {
    e.preventDefault();
    nameHandleTouchedData();
    emailHandleTouchedData();
    streetHandleTouchedData();
    pincodeHandleTouchedData();
    if (
      nameDataIsValid &&
      emailDataIsValid &&
      streetDataIsValid &&
      pincodeDataIsValid
    ) {
      const userOrder = {
        name: nameData,
        emailId: emailData,
        street: streetData,
        pincode: pincodeData,
      };
      props.onSendData(userOrder);
      namereset();
      emailreset();
      streetreset();
      pincodereset();
    }
  };
  
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={`${classes.formArea} ${nameChangeClass}`}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          spellCheck="false"
          id="username"
          onChange={nameHandleData}
          onBlur={nameHandleTouchedData}
          value={nameData}
        />
      </div>
      <div className={`${classes.formArea} ${emailChangeClass}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          spellCheck="false"
          id="email"
          onChange={emailHandleData}
          onBlur={emailHandleTouchedData}
          value={emailData}
        />
      </div>
      <div className={`${classes.formArea} ${streetChangeClass}`}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          autoComplete="off"
          spellCheck="false"
          id="street"
          onChange={streetHandleData}
          onBlur={streetHandleTouchedData}
          value={streetData}
        />
      </div>
      <div className={`${classes.formArea} ${pincodeChangeClass}`}>
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          autoComplete="off"
          spellCheck="false"
          id="pincode"
          onChange={pincodeHandleData}
          onBlur={pincodeHandleTouchedData}
          value={pincodeData}
        />
      </div>
      {nameDataValidateError && (
        <p className={nameChangeClass}>Error Name Field Cannot Be Empty</p>
      )}
      {emailDataValidateError && (
        <p className={emailChangeClass}>Error Email Field Is Invalid</p>
      )}
      {streetDataValidateError && (
        <p className={streetChangeClass}>Error Street Field Cannot Be Empty</p>
      )}
      {pincodeDataValidateError && (
        <p className={pincodeChangeClass}>Error Pincode Field Is Invalid</p>
      )}

      <div className={classes.formBtnArea}>
        <Button className={classes.btnformCancel} onClick={props.onCloseModal}>
          Cancel
        </Button>
        <Button type="submit" className={classes.btnformSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default CartForm;
