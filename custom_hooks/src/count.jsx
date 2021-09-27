import { useEffect, useState } from "react";

function useCount(val) {
    const [num, setnum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setnum(num + val);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [num,val]);
  return num;
}

export default useCount;
