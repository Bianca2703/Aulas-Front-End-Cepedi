import { useEffect, useState } from "react";

function Timer({ children }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(IntervalId);
  }, []);

  return children(seconds);
}

export default Timer;
