import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";
const Search = React.memo((props) => {
  const inputRef = useRef();
  const { onLoadingData } = props;
  const [Filter, setFilter] = useState("");
  useEffect(() => {
    const Timer=setTimeout(() => {
      if (Filter === inputRef.current.value) {
        const query =
          Filter.length === 0 ? "" : `?orderBy="title"&equalTo="${Filter}"`;
        const getData = async () => {
          const response = await fetch(
            "https://summary-one-241dd-default-rtdb.firebaseio.com/addData.json" +
              query
          );

          if (response.ok) {
            const res = await response.json();
            const items = [];
            for (const key in res) {
              const data = {
                id: key,
                title: res[key].title,
                amount: res[key].amount,
              };
              items.push(data);
            }
            onLoadingData(items);
          }
        };
        getData();
      }
    }, 500);
    return()=>{
      clearInterval(Timer);
    }
  }, [Filter, onLoadingData,inputRef]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            value={Filter}
            ref={inputRef}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
