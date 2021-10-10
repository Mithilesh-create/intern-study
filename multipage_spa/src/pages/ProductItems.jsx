import { useParams } from "react-router";

function ProductItems() {
  const parameters = useParams();
  return <div>{parameters.para}</div>;
}

export default ProductItems;
