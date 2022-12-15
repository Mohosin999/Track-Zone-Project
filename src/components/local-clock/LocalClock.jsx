import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";
import useTimer from "../../hooks/useTimer";

const LocalClock = ({ clock, updateClock, createClock, deleteClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockActions
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

LocalClock.propTypes = {
  clock: PropTypes.object.isRequired,
  updateClock: PropTypes.func.isRequired,
  createClock: PropTypes.func.isRequired,
};

export default LocalClock;
