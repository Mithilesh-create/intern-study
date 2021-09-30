import useBasicFormHook from "../basicFormHook";
const BasicForm = (props) => {
  const {
    Input: FirstInput,
    valueIsValid: FirstvalueIsValid,
    validateValue: FirstvalidateValue,
    handleDataInput: FirsthandleDataInput,
    handleInputTouch: FirsthandleInputTouch,
    FormDatavalidate: FirstFormDatavalidate,
    reset: Firstreset,
  } = useBasicFormHook((val) => val.trim() !== "");
  const {
    Input: LastInput,
    valueIsValid: LastvalueIsValid,
    validateValue: LastvalidateValue,
    handleDataInput: LasthandleDataInput,
    handleInputTouch: LasthandleInputTouch,
    FormDatavalidate: LastFormDatavalidate,
    reset: Lastreset,
  } = useBasicFormHook((val) => val.trim() !== "");
  const {
    Input: emailInput,
    valueIsValid: emailvalueIsValid,
    validateValue: emailvalidateValue,
    handleDataInput: emailhandleDataInput,
    handleInputTouch: emailhandleInputTouch,
    FormDatavalidate: emailFormDatavalidate,
    reset: emailreset,
  } = useBasicFormHook((val) => val.includes("@"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FirstvalueIsValid && LastvalueIsValid && emailvalueIsValid) {
      Firstreset();
      Lastreset();
      emailreset();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={FirstFormDatavalidate}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            autoComplete="off"
            onChange={FirsthandleDataInput}
            onBlur={FirsthandleInputTouch}
            value={FirstInput}
            spellCheck="false"
            id="name"
          />
        </div>
        <div className={LastFormDatavalidate}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            onChange={LasthandleDataInput}
            onBlur={LasthandleInputTouch}
            value={LastInput}
            spellCheck="false"
          />
        </div>
      </div>
      <div className={emailFormDatavalidate}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailhandleDataInput}
          onBlur={emailhandleInputTouch}
          value={emailInput}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      {FirstvalidateValue && (
        <p className="error-text">First Name cannot be Empty.</p>
      )}
      {LastvalidateValue && (
        <p className="error-text">Last Name cannot be Empty.</p>
      )}
      {emailvalidateValue && (
        <p className="error-text">Email is not Valid.</p>
      )}

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
