import "./ErrorModal.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
function ErrorModal(props) {
  return (
    <>
      <div className="modal_backdrop" onClick={props.onClick}>
        <Card className="outer_error_card">
          <span>{props.data.title}</span>
          <p>{props.data.message}</p>
          <Button className="okay_btn" onClick={props.onClick}>Okay</Button>
        </Card>
      </div>
    </>
  );
}

export default ErrorModal;
