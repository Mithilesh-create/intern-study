import { useHistory } from "react-router";
import MeetupForm from "./MeetupForm.jsx";
function NewMeetupPage() {
  const history = useHistory();
  const handleDataSubmit = async (data) => {
    const response = await fetch(
      "https://meetups-989f8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      history.push("/");
    }
  };
  return (
    <div className="centeredForm">
      <MeetupForm onSubmitData={handleDataSubmit} />
    </div>
  );
}

export default NewMeetupPage;
