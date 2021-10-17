import { useState } from "react";
import Wrapper from "./Wrapper";

function Greeting() {
  const [show, setshow] = useState(false);
  const HandleShow = () => {
    setshow(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!show && <p>This will not render on click</p>}
      {show && <Wrapper>Changed</Wrapper>}
      <button onClick={HandleShow}>Click Me</button>
    </div>
  );
}

export default Greeting;
