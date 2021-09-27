import { useCallback, useState } from "react";

function useData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequests = useCallback(async (reqLogic,applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqLogic.url, {
        method: reqLogic.method ? reqLogic.method : "GET",
        headers: reqLogic.headers ? reqLogic.headers : {},
        body: reqLogic.body ? JSON.stringify(reqLogic.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequests,
  };
}

export default useData;
