import { useEffect } from "react";
import { useState } from "react";
import MeetupItem from "./MeetupItem";

function AllMeetupsPage() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const handlegetData = async (data) => {
      const response = await fetch(
        "https://meetups-989f8-default-rtdb.firebaseio.com/meetups.json"
      );
      if (response.ok) {
        const res = await response.json();
        let DataVal = [];
        for (const key in res) {
          const Value = {
            id: key,
            title: res[key].title,
            url: res[key].url,
            place: res[key].place,
          };
          DataVal.push(Value);
        }
        setData(DataVal);
      }
    };
    handlegetData();
  }, []);
  return (
    <div className="alignItemsCenter">
      {Data.map((e) => {
        return <MeetupItem key={e.id} id={e.id} title={e.title} url={e.url} place={e.place} />;
      })}
    </div>
  );
}

export default AllMeetupsPage;
