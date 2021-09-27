import useCount from "../count";
function Forward() {
  const num = useCount(1);

  return <div className="frwd">{num}</div>;
}

export default Forward;
