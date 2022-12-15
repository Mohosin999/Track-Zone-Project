import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

/**
 * useTimer hooks
 *
 * @param {object} date - date will be an object
 * @returns {object} - it also returns an object
 */
const useTimer = (date) => {
  const [timer, setTimer] = useState(date);

  /**
   * useEffect hook for date
   */
  useEffect(() => {
    setTimer(date);
  }, [date]);

  let timerId = null;

  /**
   * useEffect hook for timer logic
   */
  useEffect(() => {
    if (!date || timerId !== null) return;

    timerId = setInterval(() => {
      setTimer(addSeconds(timer, 1));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  return timer;
};

export default useTimer;
