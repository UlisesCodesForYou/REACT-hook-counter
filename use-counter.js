import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  // Parameters can be used as dependencies
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // This means that this effect will run when the forwards paramter changes.
  return counter;
};

export default useCounter;
