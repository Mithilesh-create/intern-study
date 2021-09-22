import { FirstName } from "./ComA";

function ComC() {
  return (
    <FirstName.Consumer>
      {(fname) => {
        return (
          <>
            <h1>Hello {fname.Name} {fname.Surname}</h1>
          </>
        );
      }}
    </FirstName.Consumer>
  );
}

export default ComC;
