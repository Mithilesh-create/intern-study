import { createContext, useState } from "react";

export const favContext = createContext({
  togglefav: (data) => {},
  favItems: [],
});

function FavProvider(props) {
  const [fav, setfav] = useState([]);
  const toggleFavHandler = (data) => {
    const bool = fav.some((item) => item.id === data.id);
    if (bool) {
      const updatedArray = fav.filter((item) => item.id !== data.id);
      setfav(updatedArray);
    } else {
      setfav([...fav, data]);
    }
  };
  console.log(fav);
  const InitialValue = {
    togglefav: toggleFavHandler,
    favItems: fav,
  };
  return (
    <favContext.Provider value={InitialValue}>
      {props.children}
    </favContext.Provider>
  );
}

export default FavProvider;
