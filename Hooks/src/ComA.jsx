import { createContext } from "react";
import ComB from "./ComB";
const FirstName = createContext();
function ComA() {
  return (
    <>
      <FirstName.Provider value={{ Name: "Mithilesh", Surname: "Sharma" }}>
        <ComB />
      </FirstName.Provider>
    </>
  );
}

export default ComA;
export { FirstName };
