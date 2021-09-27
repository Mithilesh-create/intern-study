import { useCallback, useEffect, useState } from "react";
import "./App.css";
function App() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [newData, setnewData] = useState([]);
  const [showMovies, setshowMovies] = useState(false);
  const [gotData, setgotData] = useState({
    MovieName: "",
    MovieDesc: "",
    releaseDate: "",
  });
  const fetchData = useCallback(async () => {
    setshowMovies(true);
    seterror(false);
    setloading(true);
    try {
      const res = await fetch(
        "https://movie-db-8c1e9-default-rtdb.firebaseio.com/movies.json"
      );
      if (res.ok) {
        setloading(false);
        const newres = await res.json();
        const resArr = [];
        for (const key in newres) {
          resArr.push({
            id: key,
            MovieName: newres[key].MovieName,
            MovieDesc: newres[key].MovieDesc,
            releaseDate: newres[key].releaseDate,
          });
        }
        setnewData(resArr);
      } else {
        seterror(true);
      }
    } catch (error) {
      setloading(false);
      seterror(true);
      console.log(error);
    }
  }, []);
  // const fetchData = async () => {
  //   setshowMovies(true);
  //   seterror(false);
  //   setloading(true);
  //   try {
  //     const res = await fetch(
  //       "https://movie-db-8c1e9-default-rtdb.firebaseio.com/movies.json"
  //     );
  //     if (res.ok) {
  //       setloading(false);
  //       const newres = await res.json();
  //       const resArr = [];
  //       for (const key in newres) {
  //         resArr.push({
  //           id: key,
  //           MovieName: newres[key].MovieName,
  //           MovieDesc: newres[key].MovieDesc,
  //           releaseDate: newres[key].releaseDate,
  //         });
  //       }
  //       setnewData(resArr);
  //     } else {
  //       seterror(true);
  //     }
  //   } catch (error) {
  //     setloading(false);
  //     seterror(true);
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, [fetchData]);
  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://movie-db-8c1e9-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gotData),
        }
      );
      await res.json();
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };

  let name;
  let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setgotData({ ...gotData, [name]: value });
  };
  return (
    <div className="main_container">
      <form className="inputfield" onSubmit={postData}>
        <div>
          <label htmlFor="MovieName">Title :</label>
          <input
            id="MovieName"
            type="text"
            spellCheck="false"
            autoComplete="off"
            name="MovieName"
            onChange={handleChange}
            value={gotData.MovieName}
          />
        </div>
        <div>
          <label htmlFor="MovieDesc">Desc :</label>
          <input
            type="text"
            spellCheck="false"
            autoComplete="off"
            id="MovieDesc"
            name="MovieDesc"
            onChange={handleChange}
            value={gotData.MovieDesc}
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date :</label>
          <input
            type="text"
            spellCheck="false"
            autoComplete="off"
            id="releaseDate"
            name="releaseDate"
            onChange={handleChange}
            value={gotData.releaseDate}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="get_btn">
        <div className="getdatabtn">
          <button type="button" onClick={fetchData}>
            Get Movies
          </button>
        </div>
      </div>
      <div className="display_data">
        {showMovies
          ? newData.map((e) => {
              return (
                <div className="movie_container">
                  <h1>{e.MovieName}</h1>
                  <p>{e.MovieDesc}</p>
                  <span>{e.releaseDate}</span>
                </div>
              );
            })
          : null}
        {(newData.length === 0 || showMovies === false) &&
          !loading &&
          !error && <h1>Fetch Movie Data</h1>}
        {loading ? <h1>Loading...</h1> : null}
        {error ? <h1>Something Went Wrong</h1> : null}
      </div>
    </div>
  );
}

export default App;
