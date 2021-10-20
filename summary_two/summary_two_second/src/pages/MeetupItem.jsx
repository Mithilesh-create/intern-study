import { favContext } from "./context/fav-context";
import { useContext } from "react";
function MeetupItem(props) {
  const Data = useContext(favContext).togglefav;
  const Datalist = useContext(favContext).favItems;
  const bool = Datalist.some((item) => item.id === props.id);
  return (
    <div className="MeetUpItem">
      <img src={props.url} alt={props.title} />
      <div>
        <strong>{props.title}</strong>
        <p>{props.place}</p>
      </div>
      <div>
        <button
          onClick={() => {
            Data({
              id: props.id,
              url: props.url,
              title: props.title,
              place: props.place,
            });
          }}
        >
          {bool ? "Remove from Favorites" : "To Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MeetupItem;
