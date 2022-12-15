import { useState } from "react";
import PropTypes from "prop-types";
import ClockForm from "../clock-form/ClockForm";
import Button from "../../ui/Button";
import H3 from "../../ui/H3";

const ClockActions = ({
  local,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <div>
      <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
      {local ? (
        <Button onClick={() => setIsCreate(!isCreate)}>Create</Button>
      ) : (
        <Button onClick={() => deleteClock(clock.id)}>Delete</Button>
      )}
      {isEdit && (
        <>
          <H3>Edit Clock</H3>
          <ClockForm
            handleClock={updateClock}
            edit={true}
            title={!local}
            values={clock}
          />
        </>
      )}
      {isCreate && (
        <>
          <H3>Create New Clock</H3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

ClockActions.propTypes = {
  local: PropTypes.bool,
  clock: PropTypes.object.isRequired,
  updateClock: PropTypes.func.isRequired,
  createClock: PropTypes.func,
  deleteClock: PropTypes.func.isRequired,
};

ClockActions.defaultProps = {
  local: false,
};

export default ClockActions;
