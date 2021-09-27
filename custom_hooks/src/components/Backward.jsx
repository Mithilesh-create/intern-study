import useCount from "../count";

function Backward() {
  const num = useCount(-1);
  return <div className="bkwd">{num}</div>;
}

export default Backward;
