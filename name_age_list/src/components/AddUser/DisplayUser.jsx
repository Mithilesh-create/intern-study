import "./DisplayUser.css";
import Card from "../UI/Card";
function DisplayUser(props) {
  return (
    <Card className="outer_display_card">
      {props.data.map((e) => {
        return (
          <Card className="display_list">
            <span>{e.name}</span>
            <p>{e.age}</p>
          </Card>
        );
      })}
    </Card>
  );
}

export default DisplayUser;
