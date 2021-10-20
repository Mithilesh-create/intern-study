import React, { useCallback, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
function Ingredients() {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState();
  const [Loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "https://summary-one-241dd-default-rtdb.firebaseio.com/addData.json"
  //     );
  //     if (response.ok) {
  //       const res = await response.json();
  //       const items = [];
  //       for (const key in res) {
  //         const data = {
  //           id: key,
  //           title: res[key].title,
  //           amount: res[key].amount,
  //         };
  //         items.push(data);
  //       }
  //       setData(items);
  //     }
  //   };
  //   getData();
  // }, []);
  const handleFormData = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://summary-one-241dd-default-rtdb.firebaseio.com/addData.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const res = await response.json();
        setData([...Data, { id: res.name, ...data }]);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const removeHandler = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://summary-one-241dd-default-rtdb.firebaseio.com/addData/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setLoading(false);
        const updatedData = Data.filter((data) => data.id !== id);
        setData(updatedData);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const handleLoadingData = useCallback((data) => {
    setData(data);
  }, []);
  const handleClose = () => {
    setError(null);
    setLoading(false);
  };
  return (
    <div className="App">
      {Error && (
        <ErrorModal onClose={handleClose}>
          "Something went wrong. Please try again"
        </ErrorModal>
      )}
      <IngredientForm isLoading={Loading} onAddForm={handleFormData} />
      <section>
        <Search onLoadingData={handleLoadingData} />
        {/* Need to add list here! */}
        <IngredientList ingredients={Data} onRemoveItem={removeHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
