import useFormHook from "../use-formContext.jsx";

const SimpleInput = (props) => {
  const {
    Input: nameInput,
    valueIsValid:nameIsValid,
    validateValue: nameValueValidation,
    handleDataInput: handleNameInput,
    handleInputTouch: handleNameInputTouch,
    FormDatavalidate:FormNamevalidate,
    reset:nameReset,
  } = useFormHook((value) => value.trim() !== "");
  const {
    Input: emailInput,
    valueIsValid:emailIsValid,
    validateValue: emailValueValidation,
    handleDataInput: handleEmailInput,
    handleInputTouch: handleEmailInputTouch,
    FormDatavalidate:FormDatavalidateEmail,
    reset:emailReset,
  } = useFormHook((value) => value.includes("@"));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailInputTouch();
    handleNameInputTouch();
    if(nameIsValid && emailIsValid){
      nameReset();
      emailReset();
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div className={FormNamevalidate}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onChange={handleNameInput}
          onBlur={handleNameInputTouch}
          value={nameInput}
          id="name"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className={FormDatavalidateEmail}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          onChange={handleEmailInput}
          onBlur={handleEmailInputTouch}
          value={emailInput}
          id="email"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      {nameValueValidation && (
        <p className="error-text">Name cannot be empty.</p>
      )}
      {emailValueValidation && <p className="error-text">Email is not Valid.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
