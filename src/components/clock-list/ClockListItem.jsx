import React from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  if (!date || !timer) return null;

  return (
    <div>
      <ClockDisplay
        date={timer}
        offset={clock.offset}
        timezone={clock.timezone}
        title={clock.title}
      />
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
      <h3 style={{ margin: "0.5rem 0 1.5rem 0" }}>
        Time difference: {formatDistance(localClock, date)}
      </h3>
    </div>
  );
};

ClockListItem.propTypes = {
  clock: PropTypes.object.isRequired,
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  localClock: PropTypes.object.isRequired,
};

export default ClockListItem;
