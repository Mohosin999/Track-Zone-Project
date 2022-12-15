import React from "react";
import PropTypes from "prop-types";
import H3 from "../ui/H3";
import P from "../ui/P";
import ClockListItem from "./ClockListItem";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      <H3>Other Clocks</H3>
      <hr style={{ marginBottom: "1rem" }} />
      {clocks.length === 0 ? (
        <P>There is no clock, please create one</P>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localClock={localClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

ClockList.propTypes = {
  clocks: PropTypes.array.isRequired,
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  localClock: PropTypes.object,
};

export default ClockList;
