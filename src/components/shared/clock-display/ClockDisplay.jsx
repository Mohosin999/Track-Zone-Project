import PropTypes from "prop-types";
import { format } from "date-fns";
import CircleDiv from "../../ui/CircleDiv";
import P from "../../ui/P";
import DivShadow from "../../ui/DivShadow";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let offsetHr = offset / 60;

  return (
    <DivShadow>
      <h1>Title: {title}</h1>
      <h3>{format(date, "EEEE, dd MMMM, yyyy")}</h3>
      <CircleDiv>
        <h3>{format(date, "hh:mm:ss aaaaa'm'")}</h3>
        <P>
          {timezone}
          {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
        </P>
      </CircleDiv>
    </DivShadow>
  );
};

ClockDisplay.propTypes = {
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ClockDisplay;
