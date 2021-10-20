import MeetupItem from "./MeetupItem";
import { favContext } from "./context/fav-context";
import { useContext } from "react";

function FavoritesPage() {
  const Data = useContext(favContext).favItems;
  return (
    <div className="alignItemsCenter">
      {Data.length > 0 &&
        Data.map((e) => {
          return <MeetupItem key={e.id} id={e.id} title={e.title} url={e.url} place={e.place} />;
        })}
      {(Data.length === 0) && <p>The Favorites List is empty</p>}
    </div>
  );
}

export default FavoritesPage;
